function solution(strArr) {
    let answer = {}
    let countArr = strArr.map(v => v.length)
    for (let i = 0; i < countArr.length; i++) {
        if (!answer[countArr[i]]) {
            answer[countArr[i]] = 1
        } else {
            answer[countArr[i]]++
        } 
    }
    return Math.max(...Object.keys(answer).map(v => answer[v]))
}