/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    var dp = new Array(n+1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    var i,j;
    for(i = 2; i <= n; i++){
        for(j = 1; j <= i;j++){
            dp[i] += dp[i - j] * dp[j-1];
        }        
    }
    return dp[n];
};