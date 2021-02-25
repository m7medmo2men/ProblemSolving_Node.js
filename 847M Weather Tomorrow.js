const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
readline.on("line", (line) => input.push(line));
readline.on("close", () => {
    let n = +input.shift();
    let a = input
        .shift()
        .split(" ")
        .map((el) => +el);

    let diff = a[1] - a[0];
    let broke = false;
    for (let i = 1; i < n; i++) {
        if (a[i] !== a[i - 1] + diff) broke = true;
    }

    console.log(broke === true ? a[n - 1] : a[n - 1] + diff);
});
