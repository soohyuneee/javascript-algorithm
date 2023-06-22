function solution(arr) {
    let start = arr.indexOf(2) 
    let last = arr.lastIndexOf(2) 
    return arr.includes(2) ? arr.slice(start, last + 1) : [-1] 
}