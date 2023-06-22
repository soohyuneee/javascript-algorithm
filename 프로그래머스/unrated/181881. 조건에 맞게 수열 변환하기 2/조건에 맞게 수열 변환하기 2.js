function solution(arr) {
    let idx = 0
    let prevArr = arr
    while(true) {
        const changeArr = prevArr.map(v => {
            if(v >= 50 && v % 2 === 0) return v/2
            if(v < 50 && v % 2 === 1) return v*2+1
            return v
        })

        const isSame = prevArr.every((a, i) => a === changeArr[i])
        if(isSame) break
        idx++
        
        prevArr = changeArr
    }
    return idx
}