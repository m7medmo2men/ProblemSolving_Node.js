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
    let a = input.shift().split(" ").map((el) => +el);
    let str = "a".repeat(51).split("");
    console.log(str.join(""));
    for (let i = 0; i < n; i++) {
      str[a[i]] = str[a[i]] === "a" ? "b" : "a";
      console.log(str.join(""));
    }
  }
});
