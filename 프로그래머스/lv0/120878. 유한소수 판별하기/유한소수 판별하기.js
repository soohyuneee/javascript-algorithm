function solution(a, b) {
    let n = 1;
    for (let i = 1; i <= b; i++) {
        if (a % i === 0 && b % i === 0) n = i;
    }
    b = b / n;
    while (b % 2 === 0) b = b / 2; 
    while (b % 5 === 0) b = b / 5; 
    return b === 1 ? 1 : 2;
}