function solution(s) {
    let answer = [];
    
    for(let i =0 ; i< s.length ; i++){
        const before = s.slice(0,i)
        answer.push(before.lastIndexOf(s[i]) === -1 ? -1 : i-before.lastIndexOf(s[i]))
    }
    
    return answer;

}