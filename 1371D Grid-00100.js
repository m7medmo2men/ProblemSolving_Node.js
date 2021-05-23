const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


const input = [];
readline.on('line', line => input.push(line));
readline.on('close', () => {
    let tc = +input.shift();
    while (tc--) {
        let [n, k] = input.shift().split(' ').map(el => +el);
        if (k % n === 0) {
            console.log(0);
        } else {
            console.log(2);
        }
        let grid = new Array(n);
        for (let i = 0; i < n; i++) {
            grid[i] = new Array(n);
            grid[i].fill('0');
        }

        for (let i = 0; i < n && k; i++) {
            for (let j = 0; j < n && k; j++) {
                grid[j][(i + j) % n] = '1';
                k--;
            }
        }

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                // process.stdout.write()
                readline.output.write(grid[i][j]);
            }
            console.log()
        }
    }
})
