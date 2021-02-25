const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
readline.on('line', line => input.push(line));
readline.on('close', () => {
    let tc = +input.shift();
    while (tc--) {
        let [n, k] = input.shift().split(' ')
        let v = input.shift().split(' ').map(el => +el);
        let w = input.shift().split(' ').map(el => +el);
        v.sort((a,b)=> a-b);
        w.sort((a,b)=> b-a);
        let l = 0, r = n - 1;
        let ans = 0;
        while (k > 0 && w[k - 1] === 1) {
            ans += (v[r] * 2);
            r--;
            k--;
        }
        for (let i = 0; i < k; i++) {
            ans += v[l] + v[r];
            r--;
            l += w[i] - 1;
        }
        console.log(ans);
    }
})