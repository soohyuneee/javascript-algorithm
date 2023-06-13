function solution(n) {
   let answer = []
   let i = 2
    while (i <= n)
        if (n % i === 0) {
            answer.push(i)
            n /= i
        } else {
            i += 1
        }
    return [...new Set(answer)]
}