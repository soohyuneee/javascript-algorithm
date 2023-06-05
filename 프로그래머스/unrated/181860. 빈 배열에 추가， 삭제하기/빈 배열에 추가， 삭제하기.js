function solution(arr, flag) {
    let answer = []
    for (let i = 0; i < flag.length; i++) {
        if (flag[i] === true) {
            answer = answer.concat(Array(arr[i] * 2).fill(arr[i]))
        } else {
            answer = answer.slice(0, answer.length - arr[i])
        }
    }
    return answer;
}