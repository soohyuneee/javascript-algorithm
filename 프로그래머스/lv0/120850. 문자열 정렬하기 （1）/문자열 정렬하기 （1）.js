function solution(my_string) {
    let arr = my_string.split('')
    return arr.filter(v => !isNaN(v)).sort((a, b) => a - b).map(n => Number(n))
}