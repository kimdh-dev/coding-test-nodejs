const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

x = input;
function solution(x) {
  let answerList = [];
  let answer = "";
  let numOfLine = x[0];

  for (let i = 0; i < numOfLine; i++) {
    let strings = x[i + 1];
    strings = strings.toLowerCase();

    let maxValue = 0;
    let maxChar = "?";
    let count = new Array(26).fill(0);
    for (let j = 0; j < strings.length; j++) {
      if (strings[j] == " " || strings[j] == "\r") continue;
      let charCode = strings[j].charCodeAt();
      count[charCode - "a".charCodeAt()]++;
      if (count[charCode - "a".charCodeAt()] > maxValue) {
        maxValue = count[charCode - "a".charCodeAt()];
        maxChar = strings[j];
      } else if (maxValue == count[charCode - "a".charCodeAt()]) maxChar = "?";
    }
    answerList.push(maxChar);
  }

  answer = answerList.join("\n");
  return answer;
}

console.log(solution(x));
