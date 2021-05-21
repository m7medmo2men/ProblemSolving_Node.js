const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
readline.on("line", (line) => input.push(line));
readline.on("close", () => {
  let tc = +input.shift();
  while (tc--) {
    let [n, m] = input.shift().split(" ").map((el) => +el),
        a = input.shift().split(" ").map((el) => +el),
        b = input.shift().split(" ").map((el) => +el),
        map = new Array(1001),
        flag = 0;

    a.forEach((el) => (map[el] = 1));
    b.forEach((el) => {
      if (map[el] === 1) {
        flag = el;
      }
    });

    console.log(flag === 0 ? "NO" : `YES 1 ${flag}`);
  }
});
