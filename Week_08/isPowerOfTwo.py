# 231. 2的幂
# https://leetcode-cn.com/problems/power-of-two/

class Solution(object):
    def isPowerOfTwo(self, n):
        return n != 0 and n & (n - 1) == 0