function solution(num_list) {
    let sum = Math.pow(num_list.reduce((a, c) => a + c, 0), 2)
    let mul = num_list.reduce((a, c) => a * c, 1)
    
    return mul < sum ? 1 : 0
}