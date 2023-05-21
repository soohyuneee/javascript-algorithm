function solution(a, d, included) {
    let sum = []
    let num = a
    for (let i = 0; i < included.length; i++) {     
        if (included[i]) {
            sum.push(num)
        }
         num += d
    }
    return sum.reduce((a, c) => a + c, 0)
}