const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
function solution(input) {
  let answer = "";

  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 5; j++) {
      if (input[j][i] == "\r" || input[j][i] == undefined) continue;
      answer += input[j][i];
    }
  }

  return answer;
}

console.log(solution(input));
