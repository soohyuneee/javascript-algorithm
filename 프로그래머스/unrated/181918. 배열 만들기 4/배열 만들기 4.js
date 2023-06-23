function solution(arr) {
    let stk = [];
    let i = 0
    while (i < arr.length) {
        let stkLen = stk.length 
        if (!stkLen || stkLen && stk[stkLen - 1] < arr[i]) {
            stk.push(arr[i])
            i++
        } else if (stkLen && stk[stkLen - 1] >= arr[i]) {
            stk.pop()
        }
    }
    return stk;
}