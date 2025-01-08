const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
x = input;
const [N, M] = x[0].split(" ").map((i) => +i);

const answer = [];

function dfs(n, s, lst) {
  if (n === M) {
    answer.push(lst);
    return;
  }

  for (let j = s; j <= N; j++) {
    dfs(n + 1, j + 1, [...lst, j]);
  }
}

function solution() {
  dfs(0, 1, []);

  for (let i = 0; i < answer.length; i++) {
    console.log(answer[i].join(" "));
  }
  return;
}

solution();
// 멀트트리 풀이
