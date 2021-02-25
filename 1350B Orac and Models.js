const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = [], N = 100005;
let a, dp, n;

let solve = (idx) => {
    if (dp[idx] !== 0) {
        return dp[idx];
    }
    let ret = 0;
    for (let i = 2 * idx; i <= n; i += idx) {
        if (a[i] > a[idx]) {
            ret = Math.max(ret, solve(i) + 1);
        }
    }
    return dp[idx] = ret;
}

readline.on('line', line => input.push(line));
readline.on('close', () => {
    let tc = +input.shift();
    while (tc--) {
        dp = new Array(N);
        dp.fill(0);
        n = +input.shift();
        a = input.shift().split(" ").map((el) => +el);
        a.unshift(0);
        let ans = 0;
        for (let i = 1; i <= n; i++) {
            ans = Math.max(ans, solve(i) + 1);
        }
        console.log(ans);
    }
})
