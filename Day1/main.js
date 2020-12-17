const fs = require("fs");

function findGoal(txt, goal = 2020) {
  txt = txt.toString();
  let input = fs.readFileSync(`./${txt}.txt`).toString().split("\n");

  for (const x of input) {
    for (const y of input) {
      for (const z of input) {
        if (+x + +y + +z == goal) {
          console.log(`the result is: ${+x * +y * +z}`);
          break;
        }
      }
    }
  }
}
findGoal("input");
