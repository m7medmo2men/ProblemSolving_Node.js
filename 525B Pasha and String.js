const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
readline.on('line', line => input.push(line));
readline.on('close', () => {
    let s = input.shift();
    let m = +input.shift();
    let swaps = input.shift().split(' ').map(el => +el)

    let rev = Array(s.length + 1);
    rev.fill(0)
    for (let i = 0; i < m; i++) {
        let x = swaps[i];
        x--;
        rev[x]++;
        rev[s.length - 1 - x + 1]--;
    }
    for (let i = 1; i < s.length; i++) {
        rev[i] += rev[i - 1];
    }
    s = s.split('')
    for (let i = 0; i < s.length / 2; i++) {
        if (rev[i] % 2 !== 0) {
            let x = i;
            let y = s.length - 2 - i + 1;
            [s[x], s[y]] = [s[y], s[x]]
        }
    }
    console.log(s.join(''));
})
