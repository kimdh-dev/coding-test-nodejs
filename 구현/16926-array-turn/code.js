const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
x = input;

function get_chain(K, N, M, A) {
  let C = [];
  let i = K;
  let j = K;
  t = 0;
  for (let a = 0; a < N - 1; a++) {
    C.push(A[i][j]);
    i++;
    t++;
  }
  for (let a = 0; a < M - 1; a++) {
    C.push(A[i][j]);
    j++;
    t++;
  }
  for (let a = 0; a < N - 1; a++) {
    C.push(A[i][j]);
    i--;
    t++;
  }
  for (let a = 0; a < M - 1; a++) {
    C.push(A[i][j]);
    j--;
    t++;
  }
  return C;
}

function put_chain(C, K, N, M, A) {
  let i = K;
  let j = K;
  t = 0;
  for (let a = 0; a < N - 1; a++) {
    A[i][j] = C[t];
    i++;
    t++;
  }
  for (let a = 0; a < M - 1; a++) {
    A[i][j] = C[t];
    j++;
    t++;
  }
  for (let a = 0; a < N - 1; a++) {
    A[i][j] = C[t];
    i--;
    t++;
  }
  for (let a = 0; a < M - 1; a++) {
    A[i][j] = C[t];
    j--;
    t++;
  }
}

function rotate(K, N, M, R, A) {
  let chain = get_chain(K, N, M, A);
  const pos = chain.length - (R % chain.length);
  let rotated = [];
  rotated = rotated.concat(chain.slice(pos, chain.length));
  rotated = rotated.concat(chain.slice(0, pos));

  put_chain(rotated, K, N, M, A);
}

function solution(x) {
  let answer = "";

  const oneLine = x[0].split(" ").map((i) => +i);

  const N = oneLine[0];
  const M = oneLine[1];
  const R = oneLine[2];
  let A = [];

  for (let i = 0; i < N; i++) {
    const perLine = x[i + 1].split(" ").map((i) => +i);
    A.push(perLine);
  }

  for (let i = 0; i < Math.min(N, M) / 2; i++) {
    rotate(i, N - 2 * i, M - 2 * i, R, A);
  }

  for (let i = 0; i < N; i++) {
    answer += A[i].join(" ") + "\n";
  }

  return answer;
}

console.log(solution(x));
