// remove last characterof string
str.slice(0,-1);


// Count Occurance
let m = new Map();
var x = [1,2,3,4,1,2,3];
for (var i = 0; i < x.length; i++) {
    var key = x[i];
    if (m.has(key) === true) {
        m.set(key, m.get(key) + 1);
    } else {
        m.set(key, 1);
    }
}
m[1] = 50 // Wrong


parseInt("100") === int x = 100 === +"100" 



var arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
var counts = {};

for (var i = 0; i < arr.length; i++) {
  var num = arr[i];
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

Object.keys(count).forEach((el) => {
   if (count[el] > mx) {
      mx = count[el];
      mxChar = el;
   }
});


result = { };
for(var i = 0; i < a.length; ++i) {
    if(!result[a[i]])
        result[a[i]] = 0;
    ++result[a[i]];
}

for (var i in result) {
	console.log(result[i]);
}

for (var [key, value] of result) {
      if (value > mx) {
        mx = value;
        mxChar = key;
      }
    }




reverse String
string.split('').reverse().join('')



Prefix Sum

let a = [1,2,3,4];
let pre = [] 
a.reduce((acc, el) => {
    pre.push(acc + el);
    return acc + el;
}, 0);



How To make vector<pair<int,int>> ?

while (input.length != 0) {
    let [first, second] = input.shift().split(" ").map(el => +el);
    a.push({first, second});
}

a.sort((a, b) => a.first - b.first);  // if you want to sort the array


Splitting a String without removing the delimeter character
var string = "abcdeabcde";
var newstringreplaced = string.replace(/d/gi, ",d");
var newstring = newstringreplaced.split(",");
