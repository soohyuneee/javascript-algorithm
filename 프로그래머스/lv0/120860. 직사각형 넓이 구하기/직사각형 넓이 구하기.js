function solution(dots) {
    let x = dots.map(v => v[0])
    let y = dots.map(v => v[1])
    let xLen = Math.min(...x) - Math.max(...x)
    let yLen = Math.max(...y) - Math.min(...y)
    return Math.abs(xLen * yLen)
}