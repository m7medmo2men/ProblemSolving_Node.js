const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const fact = (n) => {
    return (n === 1) ?  1 :  fact(n - 1) * n;
}

const input = [];
readline.on('line', line => input.push(line));
readline.on('close', () => {
    let [n, m] = input.shift().split(' ');
    console.log(fact(Math.min(n, m)));
})
