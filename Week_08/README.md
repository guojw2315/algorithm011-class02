学习笔记

> 位运算

* 左移：`0110 << 1100`

* 右移：`0110 >> 0011`

* & 比 % 效率高很多:

```python
# 判断奇偶
x % 2 == 1 # ( x & 1 ) == 1

x % 2 == 0 # ( x & 1 ) == 0

# 除以二
x >> 1
```

> 布隆过滤器

* 判断元素是否存在于集合里
* 查询速度远高于其他算法，但是存在误差

```python
from bitarray import bitarray
import mmh3

class BloomFilter:
    def __init__(self, size, hash_num):
        self.size = size
        self.hash_num = hash_num
        self.bit_array = bitarray(size)
        self.bit_array.setAll(0)

    def add (self, s):
        for seed in range(self.hash_num):
            index = mmh3.hash(s, seed) % self.size
            self.bit_array[index] = 1

    def lookup (self, s):
        for seed in range(self.hash_num):
                index = mm3.hash(s, seed) % self.size
                if self.bit_array[index] == 0:
                    return 'Nope'
        return 'Probably'

```

> LRU Cache

最近使用缓存，使用得多的数据被缓存，使用的少的被移除


> 排序算法

1. 比较类排序（时间复杂度无法突破 O(nlogn) ）

2. 非比较累排序