dial = ['ABC','DEF','GHI','JKL','MNO','PQRS','TUV','WXYZ']

words = input()

time =0

for i in words :
    for j in dial :
        if i in j :
            time += dial.index(j) + 3
print(time)
        