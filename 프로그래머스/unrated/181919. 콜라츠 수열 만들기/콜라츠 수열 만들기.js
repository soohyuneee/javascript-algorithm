function solution(n) {
    let answer = [n];
    let num = n % 2 === 0 ? n / 2 : 3 * n + 1;
    while(num !== 1) {
        answer.push(num)
        if (num % 2 === 0) {
            num/=2
        } else {
            num = 3 * num + 1
        }
    }
    answer.push(1)
    return answer
}