const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
readline.on("line", (line) => input.push(line));
readline.on("close", () => {
    let tc = +input.shift();
    while (tc--) {
        let str = input.shift().split("");
        let cur = 0,
            mn = 1e8,
            cntP = 0,
            cntN = 0;
        let m = new Map();
        for (let i = 0; i < str.length; i++) {
            if (str[i] === "-") {
                cur--;
                cntN++;
            } else {
                cur++;
                cntP++;
            }
            mn = Math.min(mn, cur);
        }
        if (mn >= 0) {
            console.log(str.length);
            continue;
        }
        cur = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === "-") cur--;
            else cur++;
            if (cur < 0 && !m.has(cur)) {
                m.set(cur, i + 1);
            }
        }
        mn *= -1;
        let ans = 0,
            toBeFined = 0;
        for (let i = 0; i < mn; i++) {
            toBeFined--;
            if (m.has(toBeFined)) {
                ans += m.get(toBeFined);
            }
        }
        console.log(ans + str.length);
    }
});
