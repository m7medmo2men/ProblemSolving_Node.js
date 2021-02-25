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
        if (n === 0) {
            console.log(0);
        } else {
            let f = false,
                no = false;
            let ans = 0;
            while (n !== 1) {
                if (n % 6 === 0) {
                    f = false;
                    n /= 6;
                    ans++;
                } else {
                    if (f === false) {
                        n *= 2;
                        ans++;
                        f = true;
                    } else {
                        no = true;
                        break;
                    }
                }
            }
            if (no) {
                console.log(-1);
            } else {
                console.log(ans);
            }
        }
    }
});
