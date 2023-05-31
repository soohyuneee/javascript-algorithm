function solution(arr1, arr2) {
    let len1 = arr1.length
    let len2 = arr2.length
    let sum1 = arr1.reduce((a, c) => a + c)
    let sum2 = arr2.reduce((a, c) => a + c)
    if (len1 > len2 || (len1 === len2 && sum1 > sum2)) {
        return 1
    } else if (len1 < len2 || (len1 === len2 && sum1 < sum2)) {
        return -1
    } else {
        return 0
    }
}