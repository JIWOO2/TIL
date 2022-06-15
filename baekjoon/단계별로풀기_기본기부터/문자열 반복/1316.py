#연속해서만 나타나면 ok 하나씩만있어도 ok 나왔던 단어가 뒤에 또나오면 x

N = int(input())
cnt = 0
for tc in range(N) :
    
    words = input()

    for i in range(len(words)-1) :
        if words[i] != words[i+1] :
            back_word = words[i+1:]
            if words[i] in back_word :
                cnt += 1
                break
print(N-cnt)
     


# 전략 : 글자자리에서 슬라이싱을 한후, 뒤에 글자만 비교해서 나왔던 문자열이 나오는지 살핀다.



