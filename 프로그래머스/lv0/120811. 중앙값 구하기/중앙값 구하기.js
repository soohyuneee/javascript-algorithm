function solution(array) {
    let index = Math.floor(array.length / 2)
    return array.sort((a, b) => a - b)[index];
}