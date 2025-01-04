const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
x = input;

function solution(x) {
  const numArray = [];
  const ansArray = [];
  let [n, k] = x[0].split(" ").map(Number);

  for (let i = 1; i <= n; i++) {
    numArray.push(i);
  }

  let cnt = 0;
  while (n) {
    for (let i = 0; i < numArray.length; i++) {
      if (numArray[i]) cnt++;

      if (cnt == k) {
        ansArray.push(numArray[i]);
        numArray[i] = 0;
        cnt = 0;
        n--;
      }
    }
  }
  let answer = "";
  answer += "<";
  for (let i = 0; i < ansArray.length; i++) {
    if (i != ansArray.length - 1) answer = answer + ansArray[i] + ", ";
    else answer = answer + ansArray[i];
  }
  answer += ">";
  return answer;
}

console.log(solution(x));
