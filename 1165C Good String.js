const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = [];
readline.on("line", (line) => input.push(line));
readline.on("close", () => {
    let n = +input.shift();
    let str = input.shift();
    let arr = [];
    let out = "";
    for (let i = 0; i < n; i++) {
        if (!arr.length || arr.length % 2 === 0 || arr[arr.length - 1] !== str[i]) {
            arr.push(str[i]);
        }
    }
    if (arr.length % 2 === 1) {
        arr.pop();
    }
    out = arr.join("");
    console.log(str.length - out.length);
    console.log(out);
});
