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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return []
    let res=[], queue = [root], queueCount = 1; 
    let node, rowCount = 0;
    while(queue.length > 0) {
        rowCount++;
        for (let i = 0 ; i < queueCount ; i++) {
            node = queue.shift();
            if (node?.left) {
                queue.push (node?.left)
            }
            if (node?.right) {
                queue.push(node?.right)
            }

        }
        res.push(node?.val)
        queueCount = queue.length
        rowCount = 0
                                             
    }
    return res
    
};