const fs = require("fs");

function read(txt) {
  txt = txt.toString();
  return fs.readFileSync(`./${txt}.txt`).toString().split("\n");
}

function createPass(x) {
  let input = read(x);
  let pass = [];
  for (const i of input) {
    pass.push(i.split("\n").map((e) => e));
  }
  return pass;
}

function concat(x) {
  let pass = createPass(x);
  let tmp = [];
  let i = 0;

  while (pass[i]) {
    if (pass[i][0] === "") {
      tmp += ",";
    } else if (pass[i][0] !== "") {
      tmp += " " + [...pass[i]];
    }
    i++;
  }
  return (ccpass = tmp.split(","));
}

function checkPass() {
  let nbr = 0;
  let secu = ["ecl", "pid", "eyr", "hcl", "byr", "iyr", "hgt"];

  let input = concat("input").map((e) => {
    return [e];
  });

  for (text of input) {
    tmp = text.toString().split(" ");
    str = tmp.toString().split(",");
    let count = 0;
    for (securite of str)
      if (secu.indexOf(securite.split(":")[0]) != -1) count++;
    if (count == 7) nbr++;
  }
  return nbr;
}

console.log(checkPass());

// //1st valid
// //2nd invalid
// //3rd only missing field "cid" treat as valid
// //4th missing two fields cid and byr
// //mising cid is fine but missinf any other field is not

// //count the  number of valid  passwrd cid optional

// byr (Birth Year) 4char
// iyr (Issue Year) 4char
// eyr (Expiration Year) 4char
// hgt (Height) 2+in or 3+cmchar
// hcl (Hair Color) # + 6char
// ecl (Eye Color) 3char
// pid (Passport ID) 9char
// cid (Country ID) 3char optional

// let sec = {
//   'ecl': 3,
//   "pid": 9,
//   "eyr": 4,
//   "hcl": 7,
//   "byr": 4,
//   "iyr": 4,
//   "hgt": (4, 5)
// };
