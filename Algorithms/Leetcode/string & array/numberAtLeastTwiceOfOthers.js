var numberAtLeastTwiceOfOthers = function(nums) {
    let largest = Math.max(...nums);
    let filtered = nums.filter(n => n > largest/2 && n != largest);
    return filtered.length > 0 ? false:nums.indexOf(largest);
};