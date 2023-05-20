function solution(n) {
    let odd = 0
    let even = 0
    
    for (let i = 1; i <= n; i++) {
        if (i === 1 || i % 2) {
            odd += i
        } else {
            even += Math.pow(i, 2)
        }
    }
    
    return n % 2 ? odd : even 
}