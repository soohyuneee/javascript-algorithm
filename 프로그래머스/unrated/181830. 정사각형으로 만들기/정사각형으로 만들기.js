function solution(arr) {
    let col = arr[0].length
    let row = arr.length
    
    if (row > col) {
        const gap = Array(row-col).fill(0)
        return arr.map (v => [...v, ...gap])
    }
    
    if (row < col) {
        for (let i = 0; i < col-row; i++) {
            const gap = Array(col).fill(0)
            arr.push(gap)
        }
    }
    
    return arr;
}