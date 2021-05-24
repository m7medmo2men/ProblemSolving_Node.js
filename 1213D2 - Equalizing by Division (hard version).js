const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
const N = 2e5 + 5;
readline.on("line", (line) => input.push(line));
readline.on("close", () => {
  let [n, k] = input.shift().split(" ").map((el) => +el),
      a = input.shift().split(" ").map((el) => +el);

  let v = new Array(N);
  for (let i = 0; i < N; i++) {
    v[i] = new Array();
  }

  a.forEach((el) => {
    let cur = el,
        steps = 0;
    while (cur) {
      v[cur].push(steps);
      steps++;
      cur = Math.floor(cur / 2);
    }
  });

  let ans = 1e9;
  for (let i = 0; i < N; i++) {
    if (v[i].length < k) continue;
    const sum = v[i]
        .sort((a, b) => a - b)
        .reduce((acc, el, i) => (i < k ? acc + el : acc), 0);
    ans = Math.min(ans, sum);
  }
  console.log(ans);
});
