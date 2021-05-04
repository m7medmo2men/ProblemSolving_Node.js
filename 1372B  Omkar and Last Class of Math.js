const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
readline.on("line", (line) => input.push(line));
readline.on("close", () => {
    let tc = +input.shift();
    while (tc--) {
        let n = +input.shift();
        if (n % 2 === 0) {
            console.log(`${n / 2} ${n / 2}`);
        } else {
            let min = 1e9;
            for (let i = 2; i * i <= n; i++) {
                if (n % i === 0) {
                    min = Math.min(min, n - i, n - n / i);
                }
            }
            if (min === 1e9) {
                console.log(`1 ${n - 1}`);
            } else {
                console.log(`${n - min} ${min}`);
            }
        }
    }
});


