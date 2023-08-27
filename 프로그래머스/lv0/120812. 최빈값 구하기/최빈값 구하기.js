function solution(array) {
    let count = new Map();
    let countArr = []; 
    let max = 0;
    for(let i of array) {
        if(!count.has(i)) count.set(i, 0);
        if(count.has(i)) count.set(i, count.get(i)+1);
        while(count.get(i) > max) max++;
    }

    for (let [k, v] of count) {
        if(v === max) countArr.push(k)
    }
    
    return countArr.length === 1 ? countArr[0] : -1;
}