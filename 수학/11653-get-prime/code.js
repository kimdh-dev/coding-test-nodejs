const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
x = input;

function solution(x) {
  let num = x[0];
  while (true) {
    if (num == 1) break;
    for (i = 2; i <= num; i++) {
      if (num % i === 0) {
        console.log(i);
        num /= i;
        break;
      }
    }
  }
  return;
}

solution(x);
