function solution(my_string) {
    let arr = my_string.split('')
    return arr.filter(el => !isNaN(el)).reduce((a,b) => Number(a) + Number(b))
}