function solution(num_list) {
    let oddSum = num_list.filter((_,i) => i % 2).reduce((a, c) => a + c)
    let evenSum = num_list.filter((_,i) => i % 2 === 0).reduce((a, c) => a + c)
    return Math.max(oddSum, evenSum);
}