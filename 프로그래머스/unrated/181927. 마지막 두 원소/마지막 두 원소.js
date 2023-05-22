function solution(num_list) {
    let last = num_list.length - 1
    if (num_list[last] > num_list[last-1]) {
        return [...num_list, num_list[last] - num_list[last-1]]
    } else {
        return [...num_list, num_list[last] * 2]
    }
}