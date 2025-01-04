const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
x = input;
function solution(x) {
  const N = Number(x[0].split(" ")[0]);
  const M = Number(x[0].split(" ")[1]);
  let lightState = x[1].split(" ").map((y) => +y);

  for (let i = 2; i <= M + 1; i++) {
    const commandLine = x[i].split(" ").map((y) => +y);
    const command = commandLine[0];
    if (command === 1) {
      const i = commandLine[1];
      const x = commandLine[2];
      lightState[i - 1] = x;
    } else {
      const l = commandLine[1];
      const r = commandLine[2];
      if (command == 2) {
        for (let index = l - 1; index < r; index++) {
          if (lightState[index] == 1) lightState[index] = 0;
          else lightState[index] = 1;
        }
      } else if (command == 3) {
        for (let index = l - 1; index < r; index++) {
          lightState[index] = 0;
        }
      } else if (command == 4) {
        for (let index = l - 1; index < r; index++) {
          lightState[index] = 1;
        }
      }
    }
  }

  return lightState.join(" ");
}

console.log(solution(x));
