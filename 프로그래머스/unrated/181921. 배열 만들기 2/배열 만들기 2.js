function solution(l, r) {
    let num = [1,2,3,4,6,7,8,9]
    let answer = [];
    for (let i = l; i <= r; i++) {
        if (i.toString().replace(/['0','5']/gi, '').length === 0) {
            answer.push(i)
        }
    }
    return answer.length ? answer : [-1];
}