word = input().upper()
ans_word = list(set(word))

cnt_list = []

for i in ans_word :
    count = word.count(i)
    cnt_list.append(count)

if cnt_list.count(max(cnt_list)) >= 2 :
    print("?")
else :
    print(ans_word[(cnt_list.index(max(cnt_list)))])

    







