// 236. 二叉树的最近公共祖先
// 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
// 链接：https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    var parent = {}
    var visited = {}
    var dfs = (node) => {
        if (node.left) {
            parent[node.left.val] = node
            dfs(node.left)
        }

        if (node.right) {
            parent[node.right.val] = node
            dfs(node.right)
        }
    }

    dfs(root)

    while (p !== null && typeof p !== 'undefined') {
        visited[p.val] = true
        p = parent[p.val]
    }

    while (q !== null && typeof q !== 'undefined') {
        if (visited[q.val]) {
            return q
        }
        q = parent[q.val]
    }

    return null

};