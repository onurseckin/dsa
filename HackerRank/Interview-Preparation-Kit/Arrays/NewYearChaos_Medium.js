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
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q) {
  // Write your code here
  let swaps = 0
  let min = q.length
  for (let i = q.length - 1; i >= 0; i--) {
    if (q[i] - 3 > i) {
      console.log("Too chaotic")
      return
    }
    if (q[i] > i + 1) {
      swaps += (q[i] - (i + 1))
    } else if (min > q[i]) {
      min = q[i]
    } else if (q[i] != min) {
      swaps++
    }
  }
  console.log(swaps)
}

function main() {
  const t = parseInt(readLine().trim(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const n = parseInt(readLine().trim(), 10);

    const q = readLine().replace(/\s+$/g, '').split(' ').map(qTemp => parseInt(qTemp, 10));

    minimumBribes(q);
  }
}
