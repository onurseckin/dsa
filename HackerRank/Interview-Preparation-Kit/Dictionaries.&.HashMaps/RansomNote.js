'use strict';

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
 * Complete the 'checkMagazine' function below.
 *
 * The function accepts following parameters:
 *  1. STRING_ARRAY magazine
 *  2. STRING_ARRAY note
 */

function checkMagazine(magazine, note) {
  // Write your code here
  let map = {};
  for (let i of magazine) {
    map[i] = (map[i] || 0) + 1;
  }
  for (let i of note) {
    if (map[i] > 0) {
      map[i]--;
    } else {
      console.log("No")
      return
    }
  }
  console.log("Yes")
  return
}

function main() {
  const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

  const m = parseInt(firstMultipleInput[0], 10);

  const n = parseInt(firstMultipleInput[1], 10);

  const magazine = readLine().replace(/\s+$/g, '').split(' ');

  const note = readLine().replace(/\s+$/g, '').split(' ');

  checkMagazine(magazine, note);
}
