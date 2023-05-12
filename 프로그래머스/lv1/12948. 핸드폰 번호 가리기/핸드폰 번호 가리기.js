function solution(phone_number) {
    let hide = '*'.repeat(phone_number.slice(0,-4).length);
    let show = phone_number.slice(-4)
    return hide+show;
}