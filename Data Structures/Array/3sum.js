var threeSum = function(nums) {
	let res = [];
	if (nums.length < 3) return res;
	nums = nums.sort((a, b) => a - b);
	for (let i = 0; i < nums.length - 2; i++) {
		if (nums[i] > 0) return res;
		if (i > 0 && nums[i] == nums[i - 1]) continue;
		for (var j = i + 1, k = nums.length - 1; j < k;) {
            let sum = nums[i] + nums[j] + nums[k];
			if (sum === 0) {
				res.push([nums[i], nums[j], nums[k]]);
                j++; k--;
				while (j < k && nums[j] == nums[j - 1]) j++;
				while (j < k && nums[k] == nums[k + 1]) k--;
			} else if (sum > 0) k--;
              else j++;
		}
	}
	return res;
};
