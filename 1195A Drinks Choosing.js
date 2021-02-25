const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = []
readline.on('line', line => input.push(line));
readline.on('close', () => {
    let [n, k] = input.shift().split(' ').map(el => +el);
    let m = new Map();
    for (let i = 0; i < n; i++) {
        let x = +input.shift();
        if (m.has(x)) {
            m.set(x, m.get(x) + 1);
        } else {
            m.set(x, 1);
        }
    }

    let sets = Math.round(n / 2);
    let ans = 0;
    for (let i = 0; i <= k; i++) {
        while (m.get(i) > 1 && sets > 0) {
            ans += 2;
            m.set(i, m.get(i) - 2);
            sets--;
        }
    }
    for (let i = 1; i <= k; i++) {
        if (m.has(i) && m.get(i) === 1) {
            ans++;
            sets--;
            if (sets === 0)
                break;
        }
    }
    console.log(ans);
})
