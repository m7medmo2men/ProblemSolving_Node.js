const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
readline.on("line", (line) => input.push(line));
readline.on("close", () => {
  let n = +input.shift(),
      arr = [];
  while (input.length != 0) {
    let [a, b] = input.shift().split(" ").map((el) => +el);
    arr.push([a, b]);
  }
  arr.sort((a, b) => {
    if (a[0] === b[0]) 
        return a[1] - b[1];
    else 
        return a[0] - b[0];
  });
  
  let ans = 0;
  arr.forEach((el) => {
    ans = ans <= el[1] ? el[1] : el[0];
  });
  console.log(ans);
});
