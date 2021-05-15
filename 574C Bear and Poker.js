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

  let s = new Set();
  for (let it of a) {
    while (it % 2 === 0) it /= 2;
    while (it % 3 === 0) it /= 3;
    s.add(it);
  }

  console.log(s.size === 1 ? "Yes" : "No");
});
