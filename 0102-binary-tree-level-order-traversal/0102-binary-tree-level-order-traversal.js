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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) {
        return []
    }
    let res = [], subRes = [] ,  q=[root] ,  qLevelCount = 1; 
    let node;
    while (q.length !== 0) {
        node = q.shift()
        subRes.push(node?.val)
         if (node?.left) {
            q.push(node?.left)
        }
        if (node?.right) {
            q.push(node?.right)
        }
        if (subRes.length === qLevelCount ){
            res.push(subRes); 
            subRes = []
            qLevelCount = q.length; 
        }
        
    }
    return res
};