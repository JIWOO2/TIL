N = int(input())

score = list(map(int,input().split()))

M = max(score)

new_list = []
for num in score :
    new_num = (num/M) * 100
    new_list.append(new_num)

avg = sum(new_list) / N
print(avg)




