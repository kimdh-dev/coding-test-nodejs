const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
x = input;

function solution(x) {
  let n = Number(x[0]);
  let m = x[1].split(" ").map((i) => +i);

  let answer = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    cnt = 0;
    for (let j = 0; j < n; j++) {
      if (cnt === m[i] && answer[j] === 0) {
        answer[j] = i + 1;
        break;
      }
      if (answer[j] === 0) {
        cnt++;
      }
    }
  }

  return answer.join(" ");
}

console.log(solution(x));
