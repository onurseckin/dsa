/**
 * @param {string} s
 * @return {number}
 */
//  Given a string, find the length of the longest substring without repeating characters.
var lengthOfLongestSubstring = function(s) {
        let result = 0;
        let map = new Map();
        for (let j = 0, i = 0; j < s.length; j++) {
            if(map.has(s[j]))
                i = Math.max(map.get(s[j]), i);
            
            result = Math.max(result, j - i + 1);
            map.set(s[j], j + 1);
        }
        return result;
};