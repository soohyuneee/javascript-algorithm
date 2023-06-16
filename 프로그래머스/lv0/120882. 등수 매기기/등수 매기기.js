function solution(score) {
    let total = score.map (v => v[0] + v[1])
    let sorted = total.slice().sort((a, b) => b - a)
    return total.map(v => sorted.indexOf(v) + 1)
}