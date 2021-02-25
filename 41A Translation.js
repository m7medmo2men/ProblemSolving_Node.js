const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
readline.on('line', line => input.push(line));
readline.on('close', () => {
    let s = input[0], t = input[1];
    if (s === t.split('').reverse().join('')) {
        console.log("YES")
    } else {
        console.log("NO")
    }
})