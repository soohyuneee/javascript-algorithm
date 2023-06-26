function solution(rank, attendance) {
    let student = rank.filter((_,i) => attendance[i] !== false).sort((a,b) => a-b).slice(0,3)
    let idx = student.map(v => rank.indexOf(v))
    return (10000 * idx[0]) + (100 * idx[1]) + idx[2]
}