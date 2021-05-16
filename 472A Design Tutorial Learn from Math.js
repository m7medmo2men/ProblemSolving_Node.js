const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
readline.on("line", (line) => input.push(line));
readline.on("close", () => {
  let n = +input.shift();
  if (n % 2 == 0) {
    console.log(4, n - 4);
  } else {
    console.log(9, n - 9);
  }
});
