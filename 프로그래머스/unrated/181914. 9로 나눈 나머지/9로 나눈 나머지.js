function solution(number) {
    return number.split('').reduce((a, c) => parseInt(a) + parseInt(c)) % 9
}