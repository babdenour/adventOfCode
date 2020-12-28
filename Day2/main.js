const fs = require("fs");

let nbr1 = 0;
let nbr2 = 0;
let occurence = 0;

function findPass(txt) {
  txt = txt.toString();
  let input = fs.readFileSync(`./${txt}.txt`).toString().split("\n");
  for (const i of input) {
    [minmax, letter, pass] = i.split(" ").map((e, i) => {
      if (i == 0) return e.split("-").map((e) => +e);
      if (i == 1) return e.replace(":", "");
      if (i == 2) return e;
    });

    for (const ocu of pass) {
      if (ocu === letter) {
        occurence++;
      }
    }
    if (occurence >= minmax[0] && occurence <= minmax[1]) {
      nbr1++;
    }
    occurence = 0;
    if (pass[minmax[0] - 1] === letter && pass[minmax[1] - 1] !== letter) {
      nbr2++;
    } else if (
      pass[minmax[1] - 1] === letter &&
      pass[minmax[0] - 1] !== letter
    ) {
      nbr2++;
    }
  }
  console.log("resultat 1 :", nbr1, "resultat 2 :", nbr2);
}
findPass("input");

//answer 383 and 272
