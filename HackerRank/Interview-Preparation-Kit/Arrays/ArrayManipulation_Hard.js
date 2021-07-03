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
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function arrayManipulation(n, queries) {
  // Write your code here
  let output = new Array(n + 2).fill(0)
  let start, end, value = 0
  for (let i = 0; i < queries.length; i++) {
    start = queries[i][0]
    end = queries[i][1]
    value = queries[i][2]
    output[start] += value
    output[end + 1] -= value
  }
  return getMax(output)
}

function getMax(arr) {
  let max = arr[0]
  let sum = arr[0]
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    max = Math.max(max, sum)
  }
  return max
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

  const n = parseInt(firstMultipleInput[0], 10);

  const m = parseInt(firstMultipleInput[1], 10);

  let queries = Array(m);

  for (let i = 0; i < m; i++) {
    queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
  }

  const result = arrayManipulation(n, queries);

  ws.write(result + '\n');

  ws.end();
}
