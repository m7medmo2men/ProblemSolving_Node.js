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
        let n = +input.shift();
        let s = input.shift();
        let stack = [];
        let ans = 0;
        for (let x of s) {
            if (stack.length === 0) {
                if (x === ')') ans++;
                stack.push(x);
                continue;
            }
            if (x === ')') {
                if (stack[stack.length - 1] === '(')
                    stack.pop();
                else
                    ans++;
            } else {
                stack.push(x);
            }
        }
        console.log(ans);
    }
})
