/*const posts = [
  {
    title: "Post One",
    body: "This is post one",
  },
  {
    title: "Post Two",
    body: "This is post two",
  },
];

let getPosts = () => {
  setTimeout(() => {
    posts.forEach((element) => {
      console.log(element.body, element.title);
    });
  }, 1000);
};

let createPost = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      resolve();
    }, 2000);
  });
};

createPost({ title: "Post Three", body: "This post three" }).then(getPosts);*/
/*
const posts = [
  {
    title: "Post One",
    body: "This is post one",
  },
  {
    title: "Post Two",
    body: "This is post two",
  },
];

let getPosts = () => {
  setTimeout(() => {
    posts.forEach((element) => {
      console.log(element.body, element.title);
    });
  }, 1000);
};

let createPost = async (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      resolve();
    }, 2000);
  });
}; */
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

  let s = new Set();
  for (let it of a) {
    while (it % 2 === 0) it /= 2;
    while (it % 3 === 0) it /= 3;
    s.add(it);
  }

  console.log(s.size === 1 ? "Yes" : "No");
});
