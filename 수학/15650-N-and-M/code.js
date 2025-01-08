const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
x = input;
const [N, M] = x[0].split(" ").map((i) => +i);

const answer = [];

function dfs(n, lst) {
  if (n > N) {
    if (lst.length === M) {
      answer.push(lst);
    }
    return;
  }
  dfs(n + 1, [...lst, n]);
  dfs(n + 1, lst);
}

function solution() {
  dfs(1, []);

  for (let i = 0; i < answer.length; i++) {
    console.log(answer[i].join(" "));
  }
  return;
}

solution();
// 이진트리 풀이
