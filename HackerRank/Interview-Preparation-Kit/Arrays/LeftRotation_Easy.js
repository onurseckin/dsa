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
 * Complete the 'rotLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER d
 */

function rotLeft(a, d) {
  // Write your code here
  //If d is equal to length of a, then do nothing
  if (d === a.length) return a
  //if d is greater than length of a, then minimize unnecessary shifts
  if (d >= a.length) d = d % a.length
  let res = new Array(a.length)
  for (let i = 0; i < a.length; i++) {
    // if out of left bound, negative index
    if (i - d < 0) {
      res[i - d + a.length] = a[i]
    } else {
      res[i - d] = a[i]
    }
  }
  return res
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

  const n = parseInt(firstMultipleInput[0], 10);

  const d = parseInt(firstMultipleInput[1], 10);

  const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

  const result = rotLeft(a, d);

  ws.write(result.join(' ') + '\n');

  ws.end();
}
