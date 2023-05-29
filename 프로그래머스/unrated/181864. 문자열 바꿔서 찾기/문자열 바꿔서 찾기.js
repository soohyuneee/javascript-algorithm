function solution(myString, pat) {
    let changeStr = pat.split('').map(v => v === "A" ? "B" : "A").join('')
    return myString.includes(changeStr) ? 1 : 0
}