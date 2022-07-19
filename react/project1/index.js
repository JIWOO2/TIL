const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config/key');
const { User } = require("./models/User");


app.use(cookieParser());

//aplication/x-www-form-urlencoded 파일 가져오기
app.use(express.json());

//aplication/json
app.use(express.urlencoded({extended:true}));


const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
  useNewUrlParser: true,useUnifiedTopology:true
}).then(()=> console.log('MongoDB Connected..'))
.catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!~~ 안녕하세요~~ 반갑습니다')
})


app.post('/register',(req,res) => {
  // 회원가입 할때 필요한 정보들을 client 에서 가져오면
  //그것들을 데이터 베이스에 넣어준다.
  const user = new User(req.body)

  user.save((err,userInfo) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success : true
    })
  })
})


app.post('/login',(req,res) => {
  
  //요청된 이메일을 데이터베이스에서 있는지 찾는다.
  User.findOne({ email: req.body.email }, (err,user) => { //findone은 mongodb 메소드
    if (!user) {
      return res.json({
        loginSuccess : false,
        message : "제공된 이메일에 해당하는 유저가 없습니다."
      })
    }
  //요청한 이메일이 데이터베이스에 있다면 비밀번호랑 같은지 비교한다.
    user.comparePassword(req.body.password,(err,isMatch) => {
      if(!isMatch)
        return res.json({ loginSuccess : false, message: "비밀번호가 틀렸습니다."})

    //비밀번호가 맞다면 토큰을 생성한다.
      user.generateToken((err,user) =>{
        if(err) return res.status(400).send(err);
      //토큰을 저장한다. 어디에 ?
        res.cookie("x_auth",user.token)
        .status(200)
        .json({ loginSuccess :true, userId : user._id })
      })

    })
  }) 

  
  



  
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})