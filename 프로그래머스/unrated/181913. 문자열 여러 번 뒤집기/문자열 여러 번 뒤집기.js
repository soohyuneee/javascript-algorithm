function solution(my_string, queries) {
    queries.forEach(v => {
        let arr = [...my_string]
        let [start, end] = v
        let reverse = arr.slice(start, end+1).reverse().join('')
        arr.splice(start, end-start+1, reverse)
        my_string = arr.join('')
    })
    return my_string;
}