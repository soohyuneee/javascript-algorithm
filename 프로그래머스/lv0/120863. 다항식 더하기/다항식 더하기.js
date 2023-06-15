function solution(polynomial) {
    const arr = polynomial.split(' + ')
    
    const x = arr.filter(v => v.includes('x')).map(v => parseInt(v.replace('x','')) || 1).reduce((a, c) => a + c, 0)
    
    const num = arr.filter(v => !v.includes('x')).reduce((a, c) => a + parseInt(c), 0)
    
    let answer = []
    
    if (x) {
        if (x === 1) {
            answer.push('x')
        } else {
            answer.push(`${x}x`)
        } 
    }

    if(num) {
        answer.push(num)
    }
    return answer.join(' + ')
}