学习笔记

> 深度优先搜索

    优先搜索下一层，搜索完最深层后，再搜索上层
   

> 广度优先搜索

    优先搜索当前层，完成后，再搜索下一层


> 贪心算法
    
    通过当前状态下最优，从而希望寻找全局最优解

    与动态规划的区别是无法保存先前状态

    贪心算法证明往往比实现重要、也比较复杂


> 二分查找

* 前提:
  
1. 目标函数单调性（单调递增或递减）
2. 存在上下界
3. 能够通过索引访问

* 代码模板:
```Python
left, right = 0, len(array) - 1
while(left <= right):
    mid = (left + right) / 2
    if array[mid] == target:
        return result
    elif array[mid] < target:
        left = mid + 1
    else:
        right = mid - 1
```