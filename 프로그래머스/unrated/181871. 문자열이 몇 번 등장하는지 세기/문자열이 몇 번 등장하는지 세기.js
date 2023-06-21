function solution(myString, pat) {
    let count = 0;
    for (let i = 0; i < myString.length; i++) {
        const str = myString.slice(i, pat.length + i);
        if (str === pat) count++;
    }
    return count;
}
