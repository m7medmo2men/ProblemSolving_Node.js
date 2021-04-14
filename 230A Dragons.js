const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
readline.on("line", (line) => input.push(line));
readline.on("close", () => {
    let [s, n] = input.shift().split(" ").map(el => +el);
    let a = [];
    while (input.length != 0) {
        let [x,y] = input.shift().split(" ").map(el => +el);
        a.push({x, y});
    }
    a.sort((a, b) => a.x - b.x);
    let flag = 0;
    for (let cur of a) {
        if (s > cur.x) {
            s += cur.y;
        } else {
            flag = 1;
            break;
        }
    }
    console.log(flag ? "NO": "YES");
});