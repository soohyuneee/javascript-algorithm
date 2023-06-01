function solution(arr, intervals) {
    let idx0 = arr.slice(intervals[0][0], intervals[0][1]+1)
    let idx1 = arr.slice(intervals[1][0], intervals[1][1]+1)
    return [...idx0, ...idx1];
}