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
    let s = input.shift();
    let count = {};
    [...s].forEach((el) => {
      count[el] = count[el] ? count[el] + 1 : 1;
    });

    let mx = -1,
      mxChar;

    Object.keys(count).forEach((el) => {
      if (count[el] > mx) {
        mx = count[el];
        mxChar = el;
      }
    });

    let win = {
      R: "P",
      P: "S",
      S: "R",
    };
    let out = "";
    for (let i = 0; i < s.length; i++) {
      out += win[mxChar];
    }
    console.log(out);
  }
});
