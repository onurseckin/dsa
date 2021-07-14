/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var replaceElements = function(arr) {
  let max = arr[arr.length-1], temp
  arr[arr.length-1] = -1
  for(let i = arr.length - 2; i >= 0; i--){
      temp = arr[i]
      arr[i] = max
      if(temp > max){
          max = temp
      }
  }
  return arr
};