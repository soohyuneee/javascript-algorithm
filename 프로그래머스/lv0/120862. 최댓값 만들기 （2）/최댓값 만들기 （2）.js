function solution(numbers) {
    numbers.sort((a, b) => a - b);
    let frontNum = numbers[0] * numbers[1]
    let backNum = numbers[numbers.length - 1] * numbers[numbers.length - 2]
    return Math.max(frontNum, backNum);
}