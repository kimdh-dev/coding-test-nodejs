const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
x = input;

function solution(x) {
  let answer = "";
  let num = x[0].split(" ").map((i) => +i);

  let minNum = Math.min(num[0], num[1]);
  let maxNum = Math.max(num[0], num[1]);

  let A1, A2;
  // 최대공약수
  let cnt = minNum;
  while (cnt > 0) {
    if (minNum % cnt === 0 && maxNum % cnt === 0) {
      A1 = cnt;
      break;
    }
    cnt--;
  }

  // 최소공배수
  cnt = maxNum;
  while (true) {
    if (cnt % minNum === 0 && cnt % maxNum === 0) {
      A2 = cnt;
      break;
    }
    cnt++;
  }

  answer = A1 + "\n" + A2;
  return answer;
}

console.log(solution(x));
