function solution(intStrs, k, s, l) {
    let answer = [];
    for (let i = 0; i < intStrs.length; i++){
        let slice = parseInt(intStrs[i].slice(s, s+l))
        if (slice > k) {
            answer.push(slice)
        }
    }
    return answer;
}