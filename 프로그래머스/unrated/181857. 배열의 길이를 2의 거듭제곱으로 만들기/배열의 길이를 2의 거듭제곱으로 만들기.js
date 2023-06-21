function solution(arr) {
    const pow2 = [0, 2, 4, 8, 16, 32, 64, 128, 256, 512]
    let idx = 0
    for(let i = 0 ; i < pow2.length; i++) {
        if(arr.length < pow2[i]) break
        idx = pow2[i]
    }
    
    const zeroArr = Array(idx).fill(0).slice(0, idx-arr.length)
    
    return [...arr, ...zeroArr]
}