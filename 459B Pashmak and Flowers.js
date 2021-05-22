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

  a.sort((a, b) => a - b);

  let map = new Map();
  a.forEach((el) => {
    if (map.has(el)) map.set(el, map.get(el) + 1);
    else map.set(el, 1);
  });

  let total = map.get(Math.max(...a)) * map.get(Math.min(...a));
  console.log(`${a[a.length - 1] - a[0]} ${Math.max(...a) === Math.min(...a) ? (n * (n - 1)) / 2 : total}`);
});
