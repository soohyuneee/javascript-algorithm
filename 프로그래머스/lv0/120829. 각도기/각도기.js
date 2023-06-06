function solution(angle) {
    var answer = [0, 90, 91, 180]
    return answer.filter(el => angle >= el).length;
}