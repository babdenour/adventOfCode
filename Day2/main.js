const fs = require("fs");

function findPass(txt) {
  txt = txt.toString();
  let input = fs.readFileSync(`./${txt}.txt`).toString().split("\n");

  for (const i of input) {
    const [minmax, letter, pass] = i.split(" ").map((e, i) => {
      if (i == 0) return e.split("-").map((e) => +e);
      if (i == 1) return e.replace(":", "");
      if (i == 2) return e.trim();
    });
    console.log(minmax, letter, pass);
  }
}
findPass("input");
