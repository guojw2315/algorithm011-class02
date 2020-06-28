/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 解法1：暴力解题
var rotate = function (nums, k) {
    let temp, previous
    for (let i = 0; i < k; i++) {   
        previous = nums[nums.length - 1]
        for (let j = 0; j < nums.length; j++) {
            temp = nums[j]
            nums[j] = previous
            previous = temp
        }
    }
}

// 解法2
// var rotate = function (nums, k) {
//     let a = []
//     for (let i = 0; i < nums.length; i++) {
//         a[(k + i) % nums.length] = nums[i]
//     }

//     for (let i = 0; i < a.length; i++) {
//         nums[i] = a[i]
//     }
// };
