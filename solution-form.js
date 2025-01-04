const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
x = input;

function solution(x) {
  const answer = [];
  return answer.join("\n");
}

console.log(solution(x));
