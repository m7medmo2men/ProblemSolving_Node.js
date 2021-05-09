// JavaScript execites the code sequentially so we need to run taskOne() then taskTwo() then taskThree()

const { ENGINE_METHOD_ALL } = require("constants");

/*taskOne(); // Assume That This function send request that may takes some time

taskTwo(); // task two must run after task one

taskThree();*/

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

Array.prototype.last = function () {
  return this[this.length - 1];
};

const input = [];
readline.on("line", (line) => input.push(line));
readline.on("close", () => {
  let tc = +input.shift();
  while (tc--) {
    let [n, x] = input
      .shift()
      .split(" ")
      .map((el) => +el);

    let a = input
      .shift()
      .split(" ")
      .map((el) => +el);

    a = a.sort((a, b) => a - b);
    a = a.reverse();
    let ans = 0,
      current = 0,
      mn = 1e10;

    a.forEach((el) => {
      if (el >= x) {
        ans++;
      } else {
        current++;
        mn = Math.min(mn, el);
        if (current * mn >= x) {
          ans++, (current = 0), (mn = 1e10);
        }
      }
    });
    console.log(ans);
  }
});
