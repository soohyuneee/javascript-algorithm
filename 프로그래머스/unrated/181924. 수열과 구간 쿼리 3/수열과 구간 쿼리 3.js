function solution(arr, queries) {
    for (const [i, j] of queries) {
        const [temp1, temp2] = [arr[i], arr[j]];
        arr.splice(i, 1, temp2);
        arr.splice(j, 1, temp1);
    }
    return arr;
}