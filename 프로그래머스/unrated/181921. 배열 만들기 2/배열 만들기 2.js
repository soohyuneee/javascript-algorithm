function solution(l, r) {
    let answer = [];
    
    for (let i = l; i <= r; i++) {
        if (i.toString().replace(/['0','5']/gi, '').length === 0) {
            answer.push(i)
        }
    }
    
    return answer.length ? answer : [-1];
}