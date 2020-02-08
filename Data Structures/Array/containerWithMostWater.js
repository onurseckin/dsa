/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length-1;
    let max = 0;
    while(left < right){
        max = Math.max(max , Math.min(height[left],height[right]) * (right-left));
        height[left] > height[right] ? right-- : left++;
    }
    return max;
};