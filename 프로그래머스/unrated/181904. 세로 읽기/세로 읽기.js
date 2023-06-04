function solution(my_string, m, c) {
    return my_string.slice(c-1).split('').filter((_,i) => i % m === 0).join('')
}