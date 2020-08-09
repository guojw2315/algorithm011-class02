// 208. 实现 Trie (前缀树)
// https://leetcode-cn.com/problems/implement-trie-prefix-tree/#/description

/**
 * Initialize your data structure here.
 */
var Trie = function () {
    this.root = Object.create(null)
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let node = this.root
    for (const c of word) {
        if (!node[c]) {
            node[c] = Object.create(null)
        }
        node = node[c]
    }
    node.isWord = true
};  

Trie.prototype.traverse = function (word) {
    let  node = this.root
    for (const c of word) {
        node = node[c]
        if (!node) return null
    }
    return node
}

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    const node = this.traverse(word)
    return !!node && !!node.isWord
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    return !!this.traverse(prefix)
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */