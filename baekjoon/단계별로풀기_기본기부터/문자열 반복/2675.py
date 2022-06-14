T = int(input())

for tc in range(1,T+1) :
    R,S = input().split()
    ans = ""
    for word in S :
        ans += word * int(R)
    print(ans)


