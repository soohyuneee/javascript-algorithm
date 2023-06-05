function solution(myString, pat) {
    let lastIdx = myString.lastIndexOf(pat)
    return myString.slice(0, lastIdx + 1 + (pat.length-1))
}