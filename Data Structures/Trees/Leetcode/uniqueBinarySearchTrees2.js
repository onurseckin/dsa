/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
function generateTrees(n) {
  if (n < 1) return [];
  const dp = [...Array(n+1)].map(r => Array(n+1));
  return generate(1, n);
  
  function generate(s, e) {
    if (s > e) return [null];
    if (dp[s][e]) return dp[s][e];
    
    const res = [];
    for (let root = s; root <= e; root++) {
      for (let left of generate(s, root-1)) {
        for (let right of generate(root+1, e)) {
          const newTree = new TreeNode(root);
          newTree.left = left;
          newTree.right = right;
          res.push(newTree);
        }
      }
    }
    
    dp[s][e] = res;
    return res;
  }
}