function solution(picture, k) {
    let answer = [];
    let str = ''
    for (let i = 0; i < picture.length; i++) {
        for (let j = 0; j < picture[i].length; j++) {
            str+=picture[i][j].repeat(k)
        }
        let count = 0
        while (count < k) {
            answer.push(str)
            count++
        }
        str = ''
    }
    return answer;
}