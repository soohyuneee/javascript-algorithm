function solution(arr) {
    const newLen = 2 ** Math.ceil(Math.log2(arr.length));
    return [...arr, ...Array(newLen - arr.length).fill(0)];
}