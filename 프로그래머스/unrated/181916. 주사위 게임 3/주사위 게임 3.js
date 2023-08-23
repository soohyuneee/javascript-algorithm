function solution(a, b, c, d) {
    let hash = {}
    let answer = 0
    for (let i of [a,b,c,d]) {
        if (hash[i]) {
            hash[i] += 1;
        } else {
            hash[i] = 1;
        }
    }
    
    let key = Object.keys(hash).map(v => +v)
    let n = key.length
    let value = Object.values(hash)
    let isTwo = value[0] === 2 && value[1] === 2
    let isThree = value[0] === 3 || value[1] === 3
    
    if (n === 1) {
        answer = 1111 * key[0]
    } else if (n === 2 && isTwo) {
        answer = (key[0] + key[1]) * Math.abs(key[0] - key[1])
    } else if (n === 2 && isThree) {
        if (value[0] === 3) {
            answer = (10 * key[0] + key[1]) ** 2 
        } else {
            answer = (10 * key[1] + key[0]) ** 2   
        }
    } else if (n === 3) {
        let mul = []
        value.forEach((i,idx) => {
            if (i !== 2) {
                mul.push(key[idx])
            }
        })
        answer = mul[0] * mul[1]
    } else {
        answer = Math.min(...key)
    }
        
    return answer
}