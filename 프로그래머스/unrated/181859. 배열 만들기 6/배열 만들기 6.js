function solution(arr) {
    let stk = []
    let i = 0
    while (i < arr.length) {
        if (!stk.length || stk.length && stk[stk.length-1] !== arr[i]) {
            stk.push(arr[i])
        } else if (stk.length && stk[stk.length-1] === arr[i]) {
            stk.pop()
        }
        i++
    }
    return stk.length? stk : [-1];
}