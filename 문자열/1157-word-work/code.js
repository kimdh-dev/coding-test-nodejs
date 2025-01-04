const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
x = input[0];

function solution(x) {
  let answer = 0;
  let maxValue = 0;
  let maxChar = "?";
  let count = new Array(26).fill(0);
  x = x.toUpperCase();
  for (let i = 0; i < x.length; i++) {
    let charCode = x[i].charCodeAt();
    let idx = charCode - "A".charCodeAt();
    count[idx]++;
    if (maxValue < count[idx]) {
      maxValue = count[idx];
      maxChar = x[i];
    } else if (maxValue == count[idx]) maxChar = "?";
  }
  answer = maxChar;
  return answer;
}

console.log(solution(x));
