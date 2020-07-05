/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 解法1: 暴力循环
// var twoSum = function (nums, target) {
//     let res = [];
//     for (let i = 0; i< nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 res = [i, j]
//                 return res
//             }
//         }
//     }
// };

// 解法2: 双指针
var twoSum = function (nums, target) {
    for (var i = 0, j = nums.length - 1; j > 0; i++) {
        if (i > j) {
            j--;
            i = 0;
        }

        if (i !== j && nums[i] + nums[j] === target) {
            return [i, j]
        }
    }
};
