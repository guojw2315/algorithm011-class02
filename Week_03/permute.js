// 46. 全排列
// 链接：https://leetcode-cn.com/problems/permutations
// 给定一个 没有重复 数字的序列，返回其所有可能的全排列。

// 示例:
// 输入: [1, 2, 3]
// 输出:
// [
//     [1, 2, 3],
//     [1, 3, 2],
//     [2, 1, 3],
//     [2, 3, 1],
//     [3, 1, 2],
//     [3, 2, 1]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let res = [];
    let path = [];
    let used = [];
    dfs(nums, 0, path, used, res);
    return res;
};

function dfs (nums, depth, path, used, res) {
    if (depth === nums.length) {
        res.push([...path]);
        return
    }

    for (let i = 0; i < nums.length; i++) {
        if (used[i]) {
            continue;
        }
        path.push(nums[i]);
        used[i] = true;
        dfs(nums, depth + 1, path, used, res);
        path.pop();
        used[i] = false;
    }
}
