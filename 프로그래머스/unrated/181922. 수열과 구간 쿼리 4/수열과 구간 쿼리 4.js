function solution(arr, queries) {
    return queries.reduce((acc, cur) => {
        const [s, e, k] = cur
        return [...acc].map((v, i) => {
            if(i >= s && i <= e) {
                if(i % k === 0) return v+1
            }
            return v
        })
    }, arr)
}