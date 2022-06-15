change_word = ['c=','c-','dz=','d-','lj','nj','s=','z=']

words = input()

for i in change_word :
    words = words.replace(i,'*')
print(len(words))

