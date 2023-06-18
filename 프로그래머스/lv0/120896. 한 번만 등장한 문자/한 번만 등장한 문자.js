function solution(s) {    
    let result = [];
    for (let el of s) {
        if (s.indexOf(el) === s.lastIndexOf(el)) {
            result.push(el);
        }
    }
    return result.sort().join('');
}