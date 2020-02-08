let str = "aaaaa" //15

var palindromicSubstrings = function(s) {
    var count = s.length;
    var next;
    
    var calculate = function (left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            count++;
            left--;
            right++;
            console.log(left + " "+ right);
        }
    }
    
    for (var i = 0; i < s.length; i++) {
        next = i + 1;
        calculate(i - 1, next);
        calculate(i, next);
    }
    
    return count;
}