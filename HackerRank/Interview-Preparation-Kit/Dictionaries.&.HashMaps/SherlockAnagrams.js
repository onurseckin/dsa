'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'sherlockAndAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function sherlockAndAnagrams(s) {
  // Write your code here
  let count = 0, anagrams = []
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
      anagrams.push(s.slice(i, j).split("").sort().join(""))
    }
  }
  for (let i = 0; i < anagrams.length; i++) {
    for (let j = i + 1; j < anagrams.length; j++) {
      if (anagrams[i] === anagrams[j]) count++
    }
  }
  return count
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine().trim(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const s = readLine();

    const result = sherlockAndAnagrams(s);

    ws.write(result + '\n');
  }

  ws.end();
}
