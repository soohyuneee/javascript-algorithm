function solution(date1, date2) {
    let new1 = new Date(`${date1[0]}-${date1[1]}-${date1[2]}`)
    let new2 = new Date(`${date2[0]}-${date2[1]}-${date2[2]}`)
    return new1 < new2 ? 1 : 0
}