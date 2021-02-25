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
    let tc = +input.shift();
    while (tc--) {
        let [n, k] = input.shift().split(' ').map(el => +el);
        let v = input.shift().split(' ').map(el => +el);
        let rem = new Array(n);
        let m = new Map();
        for (let i = 0; i < n; i++) {
            rem[i] = v[i] % k;
        }

        for (let i = 0; i < n; i++) {
            if (rem[i] === 0) continue;
            let option1 = k - rem[i];
            if (!m.has(option1)) {
                m.set(option1, 1);
            } else {
                let times = m.get(option1);
                let temp = (times + 1) * k - rem[i];
                m.set(temp, 1);
                m.set(option1, times + 1);
            }
        }
        let mx = 0;
        for (let [k, v] of m.entries()) {
            mx = Math.max(k, mx);
        }
        console.log(mx === 0 ? mx : mx + 1);
    }
})
