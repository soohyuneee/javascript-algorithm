function solution(s) {
    let odd = Math.floor(s.length / 2)
    let even = s.length / 2
    
    return s.length % 2 ? s[odd] : s[even - 1] + s[even]
}