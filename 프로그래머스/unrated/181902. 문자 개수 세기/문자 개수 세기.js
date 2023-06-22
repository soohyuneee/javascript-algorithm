function solution(my_string) {
    let alphabet = Array(52).fill(0)
    for (let i = 0; i < my_string.length; i++) {
        let idx;
        if (my_string[i] === my_string[i].toUpperCase()) {
            idx = my_string[i].charCodeAt() - 65
        } else {
            idx = my_string[i].charCodeAt() - 71
        }
        alphabet[idx]++
    }
    return alphabet
}