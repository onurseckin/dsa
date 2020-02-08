var twoSum = function(nums, target) {
    var dictionary = {};
    for(var i=0; i<nums.length; i++){
        var input = nums[i];
        var diff = target - input;
        if(diff in dictionary){
            return [dictionary[diff], i];
        }                 
        dictionary[input]=i;
    }
    return null;
};

//2,9,13,17  11