function solution(my_string) {
    let strArr = my_string.split('')
    return strArr.filter(v => !['a','e','i','o','u'].includes(v)).join('')
}