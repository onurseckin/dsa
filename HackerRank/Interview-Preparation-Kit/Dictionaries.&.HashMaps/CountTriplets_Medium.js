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

// Complete the countTriplets function below.
/*
r = 3
1 3 3 3 9 27
          |
m2 number of pair occurences
3:1
9:3
27:1
m3 number of triplet occurences
9:3
27:3

count = 6

*/
function countTriplets(arr, r) {
  let count = 0
  let m2 = {}
  let m3 = {}
  arr.forEach(curr => {
    if (m3[curr]) count += m3[curr]
    if (m2[curr]) {
      m3[curr * r] = (m3[curr * r] || 0) + m2[curr]
    }
    m2[curr * r] = (m2[curr * r] || 0) + 1
  })
  return count
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const nr = readLine().replace(/\s+$/g, '').split(' ');

  const n = parseInt(nr[0], 10);

  const r = parseInt(nr[1], 10);

  const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

  const ans = countTriplets(arr, r);

  ws.write(ans + '\n');

  ws.end();
}
