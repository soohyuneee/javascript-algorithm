function solution(order) {
    let result = 0;
    for (let i = 0; i < order.length; i++) {
        if (order[i].includes('americano') || order[i] === "anything") {
            result += 4500
        } else if (order[i].includes('cafelatte')) {
            result += 5000
        }
    }
    return result;
}