function solution(a, b) {
    return a.map((v, idx) => v * b[idx]).reduce((a, c) => a + c, 0)
}