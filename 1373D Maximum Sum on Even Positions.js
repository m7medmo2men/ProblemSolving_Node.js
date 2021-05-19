let maxSubArray = (arr) => {
  let mx = 0,
    cur = 0;
  arr.forEach((el) => {
    cur += el;
    mx = Math.max(mx, cur);
    if (cur < 0) cur = 0;
  });
  return mx;
};

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
readline.on("line", (line) => input.push(line));
readline.on("close", () => {
  let tc = +input.shift();
  while (tc--) {
    let n = +input.shift(),
        a = input.shift().split(" ").map((el) => +el),
        sum = a.reduce((acc, v, idx) => (acc += idx % 2 === 0 ? v : 0), 0),
        x = [],
        y = [];
        
    for (let i = 1; i < n; i += 2) x.push(a[i] - a[i - 1]);
    for (let i = 2; i < n; i += 2) y.push(a[i - 1] - a[i]);
    
    console.log(sum + Math.max(maxSubArray(x), maxSubArray(y)));
  }
});
