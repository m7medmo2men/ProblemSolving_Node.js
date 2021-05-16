const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
readline.on("line", (line) => input.push(line));
readline.on("close", () => {
  let tc = +input.shift();
  while (tc--) {
    let n = +input.shift();

    let a = input.shift(),
        b = input.shift();
    a = Array.from(a);
    b = Array.from(b);

    let reversed = false,
        lastBit = 0,
        l = 0,
        r = n - 1;

    let ans = [];
    for (let i = n - 1; i >= 0; i--) {
      let curLastBit = a[lastBit];
      if (reversed) curLastBit = curLastBit === "0" ? "1" : "0";
      if (curLastBit == b[i]) ans.push(1);
      ans.push(i + 1);
      if (!reversed) {
        lastBit = r;
        l++;
      } else {
        lastBit = l;
        r--;
      }
      reversed = !reversed;
    }

    console.log(ans.length);
    let out = "";
    ans.forEach((el) => (out += el + " "));
    console.log(out);
  }
});
