const fs = require("fs");
const [input, ...words] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
x = input;

function setOrder(a, b, n) {
  for (let i = 0; i < n; i++) {
    if (a[i] != b[i]) {
      return a[i].charCodeAt() - b[i].charCodeAt();
    }
  }
}

function solution(x, words) {
  let answer = "";
  let wordList = words.map((a) => {
    return a.replace("\r", "");
  });

  const [n, m] = x.split(" ").map(Number);

  const list = [];
  const dict = {};

  // words 개수 카운트
  wordList.map((e) => {
    if (e.length >= m) {
      if (dict[e]) {
        dict[e]++;
      } else {
        dict[e] = 1;
        list.push(e);
      }
    }
  });

  list.sort((a, b) => {
    // 빈도수 정렬
    if (dict[a] < dict[b]) return 1;
    else if (dict[a] == dict[b]) {
      // 빈도수가 같다면 길이를 비교
      if (a.length < b.length) return 1;
      else if (a.length == b.length) {
        // 길이까지 같다면 사전순
        return setOrder(a, b, a.length);
      } else {
        return -1;
      }
    } else {
      return -1;
    }
  });

  answer = list.join("\n");
  return answer;
}

console.log(solution(x, words));
