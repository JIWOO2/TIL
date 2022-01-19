### 함수 

* 예제

```python
# 숫자를 받아서 세제곱 결과를 반환
def cube(number) :
    return number*number*number

print(cube(3))
```

#### 값에 따른 함수의 종류

* void function : 명시적인 return 값이 없는경우, None을 반환하고 종료
* value returening function : 함수 실행 후 , return 문을 통해 값 반환



```python
def m(x,y) :
    return x -y
    return x * y

print(m(1,2))                   ## x-y 만 하고 종료된다.


def minus_and_product(x,y) :
    return x-y , x*y
z= minus_and_product(4,5)
print(z)                         ## tuple 로 값이 생성된다. (-1,20)
```





### 함수실습문제 -사각형 넓이

```python
#      넓이와 둘레를 튜플로 나오게 함수 지정해보자
def rectangle(width,height) :
    return width*height, (width+height)*2

print(rectangle(30,20))

```

Argumnet 란 ?

* 함수 호출 시 함수의 parameter 를 통해 전달되는 값
  *  필수 Argument  : 반드시 전달되어야 하는 argumnet
  *  선택 Argumnet : 값을 전달하지 않아도 되는 경우는 기본 값이 전달



```python
def add(x,y) :
    return x+y

print(add(1,2))  #위치 x=1 ; y=2
print(add(y=2,x=1)) # 키워드 -직접 x와 y 값을 각각 지정
print(add(x=1,2))    # 오류가 뜬다 **키워드로 지정하는 순간 위치가 이미 의미가 없다.**
print(add(1,y=2))  # 동작한다. 위 경우와 차이점 !!
```



```python
def family(**kwagrs) :
    return(kwagrs, type(kwagrs))
print(family(father='고길동',monster='둘리'))
```



#### 함수의 범위(scope)

* 함수는 코드 내부에 local scope를 생성하며, 그외의 공간인 global scope 로 구분한다.

  * scope 

    * global scope : 코드 어디에서든 참조 할 수 있는 공간.
    * local scope : 함수가 만든 scope 함수 내부에서만 참조가능

  * variable

    * global variable : global scope에 정의된 변수 
    * local variable : local  scope 에 정의된 변수

    ```python
    def ham():
        a= 'spam'
        
    #1.
    print(a) # ?? NameError 
    
    #2.
    ham()
    print(a) # NameError
    
    # 함수는 가장 기본 : local scope  !
    # 블랙박스의 결과를 받아보고싶으면 반환 값을 변수에 저장해서 사용하는 것
    # 블랙박스 밖으로 결과를 주고싶을땐 => return 해야한다.
    ```



### 재귀함수

* 자기 자신을 호출하는 함수
* **1개이상의 base case(종료되는 상황)가 존재하고, 수렴하도록 작성된다.** 