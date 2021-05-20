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
        tempN = n,
        v = [];
    while (tempN--) {
      let [a, b] = input.shift().split(" ").map((el) => +el);
      v.push([a, b]);
    }
    
    v.sort((a, b) => {
      if (a[0] === b[0]) return a[1] - b[1];
      else return a[0] - b[0];
    });
    
    let ans = "",
        x = 0,
        y = 0,
        flag = 0;
    for (let i = 0; i < n; i++) {
      if (v[i][0] < x || v[i][1] < y) flag = 1;
      if (flag) break;
      while (x != v[i][0]) (ans += "R"), x++;
      while (y != v[i][1]) (ans += "U"), y++;
    }
    console.log(flag ? "NO" : `YES \n${ans}`);
  }
});
