function solution(code) {
    let str = ''
    let mode = 0
    
    for (let i = 0; i < code.length; i++) {
        if (mode === 0 && code[i] === '1') {
            mode = 1    
        } else if (mode === 1 && code[i] === '1') {
            mode = 0
        }
        
        if (mode === 0 && code[i] !== '1') {
            if (i % 2 === 0) {
                str += code[i]
            } 
        } else if (mode === 1 && code[i] !== '1') {
            if (i % 2 === 1) {
            str += code[i]
            } 
        }
    }
    return str.length ? str : "EMPTY"
}