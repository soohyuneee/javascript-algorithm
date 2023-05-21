function solution(a, b, c) {
    let abc = a + b + c
    let abc2 = Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2)
    let abc3 = Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3)
    
    if ( a === b && a === c && b === c) {
        return abc * abc2 * abc3
    } else if (a !== b && a !== c && b !== c) {
        return abc
    } else {
        return abc * abc2
    }
}