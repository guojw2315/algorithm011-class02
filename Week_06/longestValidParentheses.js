// 32. 最长有效括号
// https://leetcode-cn.com/problems/longest-valid-parentheses/

// 给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    let maxLen = 0;
    const len = s.length;
    const dp = new Array(len).fill(0);
    for (let i = 1; i < len; i++) {
        if (s[i] == ')') {
            if (s[i - 1] == '(') {
                if (i - 2 >= 0) {
                    dp[i] = dp[i - 2] + 2;
                } else {
                    dp[i] = 2;
                }
            } else if (s[i - dp[i - 1] - 1] == '(') {
                if (i - dp[i - 1] - 2 >= 0) {
                    dp[i] = dp[i - 1] + 2 + dp[i - dp[i - 1] - 2];
                } else {
                    dp[i] = dp[i - 1] + 2;
                }
            }
        }
        maxLen = Math.max(maxLen, dp[i]);
    }
    return maxLen;
};