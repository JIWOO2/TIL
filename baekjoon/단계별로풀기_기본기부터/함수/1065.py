N = int(input())

ans  = 0 

for num in range(1,N+1) :
    if num <= 99 :
        ans += 1 
    else :
        nums = list(map(int,str(num)))

        if nums[0] - nums[1] == nums[1] - nums[2] :
            ans +=1
print(ans)
