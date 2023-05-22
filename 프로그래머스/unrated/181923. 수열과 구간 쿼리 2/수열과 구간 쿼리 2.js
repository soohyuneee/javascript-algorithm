function solution(arr, queries) {
    let answer = [];
    for (const [s, e, k] of queries) {
        const n = arr.filter((v, i) => s <= i && i <= e && v > k).sort((a,b)=>a-b)[0];
        answer.push(n ? n : -1)
    }
    return answer
}