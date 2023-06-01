function solution(arr, idx) {
    let idxNum = arr.slice(idx).indexOf(1)
    return idxNum === -1 ? -1 : idxNum+idx
}