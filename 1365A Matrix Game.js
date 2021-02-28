const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = [];


readline.on('line', line => input.push(line));
readline.on('close', () => {
    let tc = +input.shift();
    while (tc--) {
        let [n, m] = input.shift().split(" ").map(el => +el);
        let a = new Array(n);
        let rows = new Array(n).fill(0);
        let cols = new Array(m).fill(0);
        for (let i = 0; i < n; i++)
            a[i] = new Array(m);

        for (let i = 0; i < n; i++) {
            a[i] = input.shift().split(" ").map(el => +el);
            for (let j = 0; j < m; j++) {
                if (a[i][j]) {
                    rows[i] = 1;
                    cols[j] = 1;
                }
            }
        }

        let ans = 0;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (a[i][j] === 0 && !rows[i] && !cols[j]) {
                    ans++;
                    rows[i] = 1;
                    cols[j] = 1;
                }
            }
        }
        console.log((ans & 1) ? "Ashish" : "Vivek");
    }
})
