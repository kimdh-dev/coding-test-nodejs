const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
x = input;

function getPrime(n2) {
  const answer = new Array(n2 + 1).fill(false);
  answer[0] = answer[1] = true;

  for (let i = 2; i < Math.sqrt(answer.length); i++) {
    if (answer[i]) continue;
    for (let j = i * i; j < answer.length; j += i) {
      answer[j] = true;
    }
  }

  return answer;
}

function solution(x) {
  let num = x[0].split(" ").map((i) => +i);
  const [n1, n2] = num;

  answer = getPrime(n2);

  for (let i = n1; i <= n2; i++) {
    if (!answer[i]) console.log(i);
  }

  return;
}

solution(x);
