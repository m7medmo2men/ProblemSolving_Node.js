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
        let a = input.shift().split(" ").map(el => +el);
        let sum = a.reduce((acc, el) => acc + el),
            odd = a.some(el => el % 2 !== 0),
            even = a.some(el => el % 2 === 0);
        
        if (sum % 2 !== 0) 
            console.log("YES");
        else 
            console.log((odd & even) ? "YES" : "NO");
    }
});