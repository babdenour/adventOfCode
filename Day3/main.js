const fs = require("fs");

function read(txt) {
  txt = txt.toString();
  return fs.readFileSync(`./${txt}.txt`).toString().split("\n");
}
input = read("input");

let occurence = 0;
let j = 0;
let len = input[0].length;
for (let i = 1; i < input.length; i++) {
  if (input[i][(j + 3) % len] === "#") occurence++;
  j += 3;
}
// console.log("j", j);
console.log(occurence);
