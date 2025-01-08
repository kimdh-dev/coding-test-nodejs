const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
x = input;
const [N, M] = x[0].split(" ").map((i) => +i);

const answer = [];
const v = new Array(N + 1).fill(0);

function dfs(n, lst) {
  if (n === M) {
    answer.push(lst);
    return;
  }

  for (let j = 1; j <= N; j++) {
    if (v[j] === 0) {
      v[j] = 1;
      dfs(n + 1, [...lst, j]);
      v[j] = 0;
    }
  }
}

function solution() {
  dfs(0, []);

  for (let i = 0; i < answer.length; i++) {
    console.log(answer[i].join(" "));
  }

  return;
}

solution();
