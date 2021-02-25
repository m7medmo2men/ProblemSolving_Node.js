const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = []
readline.on('line', line => input.push(line));
readline.on('close', () => {
    let [n, k] = input.shift().split(" ").map(el => +el);
    let a = input.shift().split(" ").map(el => +el);
    let pre = new Array(n + 1);
    pre[0] = 0;
    a = a.sort((a, b) => a - b);
    for (let i = 1; i <= n; i++) pre[i] = pre[i - 1] + a[i - 1];
    let bestOC = 1, bestVal = a[0];
    for (let i = 1; i < n; i++) {
        let s = 1, e = i + 1, ans = 0;
        while (s <= e) {
            let mid = Math.floor((s + e) / 2);
            let total = mid * a[i];
            let ma3ya = pre[i + 1] - pre[i + 1 - mid];
            let diff = total - ma3ya;
            if (diff <= k) {
                s = mid + 1;
                ans = mid;
            } else {
                e = mid - 1;
            }
        }
        if (ans > bestOC) {
            bestOC = ans;
            bestVal = a[i];
        }
    }
    console.log(`${bestOC} ${bestVal}`);
})
