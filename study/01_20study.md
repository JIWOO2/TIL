###  절댓값 



```python
def my_abs(x):
    if type(x) == complex :
        return (x.real**2 + x.imag**2)**0.5
    elif x > 0 :
        return x
    elif x < 0 :
        return -x
    else :
        return -x
```



---



### all() 직접 구현하기



```python
def my_all(elements):
    res = True
    for i in elements : 
        if bool(i)==False:
            res = False
            break
    return res
```



----



### any()직접 구현하기

```python
def my_any(elements):
    for i in elements :
        if bool(i) == True :
            return True
    return False
```



