function solution(num_list) {
    let odd = parseInt(num_list.filter(v => v % 2 === 1).join(''))
    let even = parseInt(num_list.filter(v => v % 2 === 0).join(''))
    return odd + even
}