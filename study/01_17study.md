### 01-17 오후 수업내용 

* expression 에는 참/거짓에 대한 조건식
  *  조건이 참인 경우 이후 들여쓰기 되어있는 코드 블럭을 실행
  *  이외의 경우 else 이후 들여쓰기 되어있는 코드 블럭을 실행
* 예시 (홀수, 짝수)

 ```python
 num = int(input('숫자를 입력해 주세요:'))
 print(num)
 
 if num % 2 == 1:
     print('홀수입니다.')
 else :
     print('짝수입니다.')
 ```





* 복수 조건문
  * 복수의 조건식을 활용할 경우 elif를 활용하여 표현한다.



#### 실습문제 (미세먼지 농도 별 메시지 출력)

```python
dust = 100

#150 초과 : 매우나쁨
if dust > 150:
    print('매우 나쁨!')
    
# 80 초과 : 나쁨
elif dust > 80:
    print('나쁨')
# 30 초과 : 보통
elif dust > 30:
    print('보통')
# 나머지는 모두 좋음
else :
    print('좋음')
```



### 조건 표현식

* 조건 표현식을 일반적으로 조건에 따라 값을 정할때 활용
* 삼항 연산자로 부르기도 함



#### 실습문제 

* num이 정수일때, 아래의 코드는 무엇을 위한 코드일까?

```python
value = num if num >=0 else -num      #절대값을 저장하기 위한 코드
```





* #### 조건 표현식





### 반복문

#### while 문

 * 조건이 참인 경우 들여쓰기 되어 있는 코드 블럭이 실행됨
 * 코드 블록이 모두 실행되고, 다시 조건식을 검사하며 반복적으로 실행된다.
 * while문은 무한 루프를 하지 않도록 종료조건이 반드시 필요하다.





```python
# 1부터 사용자가 입력한 양의 정수까지의 총합 (while)

#사용자 입력한 양의 정수를 저장.
user_input = int(input())
# 값 초기화
n=0
total=0
#반복문
while n =< user_input:
    #하나씩 더한다
    total += n
    n += 1
print(total)
```



#### For 문

* For 문은 시퀀스(string, tuple, list, range)를 포함한 순회가능한 객체 요소를 모두 순회함



####  예제

* 사용자가 입력한 문자를 한 글자씩 출력하시오.

```python
chars = input()     #happy 입력

for char in chars : 
    print(char)
    

# 다른방법
for idx in range(len(chars)):
    print(idx, chars[idx])
    
    0 h
    1 a
    2 p
    3 p
    4 y
```



#### 딕셔너리(Dictionary) 순회

* 딕셔너리는 기본적으로 key를 순회하며, key를 통해 값을 활용한다.



```python
grades = {'kim':80, 'lee':100}
 # 1. 딕셔너리 순회 => key!!!
    
for key in grades:
    print(key, grades[key])
    
for key in grads.keys():
    print(key,grades[key])
    
for value in grads.values():
    print(value)
    
for key, value in grades.items():
    print(key, value)
```





###  List comprehension 

```python
cubic_list = []
for number in range(1,4) :
    cubic_list.append(number**3)
cubic_list

#깔끔한 방법
[number**3 for number in range(1,4)]
```



#### Dictionary comprehension

```python
cubic_dict = {}

for number in range (1,4):
    cubic_dict[number] =number**3
cubic_dict


#깔끔한 방법
{number:number**3 for number in range(1,4)}
```



####  홀수 예제

```python
# 1~30까지 숫자중에 (반복)
# 홀수만(조건)

numbers =[]
for i in range(1,31):
    if i % 2 == 1 :
        numbers.append(i)
print(numbers)

numbers_2 = [i for i in range(1,31) if i % 2 ==1]
print(numbers_2)
```

