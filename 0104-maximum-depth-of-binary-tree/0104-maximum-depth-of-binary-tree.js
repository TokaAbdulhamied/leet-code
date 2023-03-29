/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let count = 0; 
    return maxTreeDepth(root, count)
};


function maxTreeDepth (node, count) {
    if (node === null) {
        return count ;
    }
    count++; 
    return Math.max(maxTreeDepth(node?.left, count), maxTreeDepth(node?.right, count))
}