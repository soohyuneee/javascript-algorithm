const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    lower = str.toLowerCase()
    upper = str.toUpperCase()
    result = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === lower[i]) {
            result += upper[i]
        } else {
            result += lower[i]
        }
    }
    console.log(result)
});