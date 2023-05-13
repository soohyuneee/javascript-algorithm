function solution(s) {
    let validLength = s.length === 4 || s.length === 6
    let validNum = s == parseInt(s)
    return validLength && validNum
}