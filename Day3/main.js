const fs = require("fs");

function read(txt) {
  txt = txt.toString();
  return fs.readFileSync(`./${txt}.txt`).toString().split("\n");
}
input = read("input");

function countTrees(moveRight, moveDown) {
  let occurence = 0;
  let j = 0;
  let len = input[0].length;
  for (let i = moveDown; i < input.length; i += moveDown) {
    if (input[i][(j + moveRight) % len] === "#") occurence++;
    j += moveRight;
  }
  return occurence;
}

function getNbMultiply() {
  const moveRight = [1, 3, 5, 7];
  let ttl = countTrees(1, 2);
  for (move of moveRight) {
    ttl *= countTrees(move, 1);
  }
  return ttl;
}

function getMoveThree() {
  return countTrees(3, 1);
}

console.log(getMoveThree());
console.log(getNbMultiply());
