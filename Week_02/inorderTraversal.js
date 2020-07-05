/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let res = []

    if (root && root.left) {
        res = res.concat(inorderTraversal(root.left))
    }

    if (root && root.val !== null) {
        res.push(root.val)
    }

    if (root && root.right) {
        res = res.concat(inorderTraversal(root.right))
    }
    return res
};

