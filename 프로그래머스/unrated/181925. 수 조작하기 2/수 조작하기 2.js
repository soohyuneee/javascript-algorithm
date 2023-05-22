function solution(numLog) {
    const result = []
    for (let i = 0; i<numLog.length-1; i++) {
        let num = numLog[i+1] - numLog[i]
        result.push(num) 
    }
    return result.map(v => {
        if (v === 1) return 'w'
        if (v === -1) return 's'
        if (v === 10) return 'd'
        if (v === -10) return 'a'
    }).join('')
}