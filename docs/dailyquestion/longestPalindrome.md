---
title: 5.最长回文子串
toc: content
tocDepth: 4
---

## 题目

### 题目难度：🔥🔥 中等

给你一个字符串`s`，找到 `s` 中最长的回文子串。

如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。

### 示例 1

```bash
输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
```

### 示例 2

```bash
输入：s = "cbbd"
输出："bb"
```

#### 提示

```bash

1 <= s.length <= 1000
s 仅由数字和英文字母组成
```

## 解法

### 解法一：动态规划

- 定义状态

```bash
dp[i][j] 表示字符串 s[i...j] 是否为回文子串
```

- 状态转移方程

```bash
dp[i][j] = dp[i+1][j-1] && s[i] === s[j];
```

- 初始状态

  ```bash
  对于所有 i === j 的情况，dp[i][j] = true;
  对于所有 i !== j 的情况，dp[i][j] = false
  ```

- 需要注意

```bash
第二层循环需要从后往前遍历。因为 i 和 j 是往两边扩展，先求出 dp[i+1][j-1]，才能求出 dp[i][j]。
回文子串长度可能为偶数，例如：abbc，此时 dp[1][2] = dp[2][1] && s[2][1]，这里的 dp[2][1] 为 false，需要特殊判断

```

- 代码

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const n = s.length;
  // dp[i][j] 表示 s[i...j] 是否为回文子串
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(false));
  let longestPalindromeLen = 0;
  let longestPalindromeStr = '';

  for (let j = 0; j < n; j++) {
    dp[j][j] = true;
    updatePalindrome(j, j);
    if (s[j - 1] === s[j]) {
      dp[j - 1][j] = true;
      updatePalindrome(j - 1, j);
    }
    for (let i = j - 2; i >= 0; i--) {
      if (dp[i + 1][j - 1] && s[i] === s[j]) {
        dp[i][j] = true;
        updatePalindrome(i, j);
      }
    }
  }

  return longestPalindromeStr;

  function updatePalindrome(left, right) {
    const len = right - left + 1;
    if (longestPalindromeLen < len) {
      longestPalindromeLen = len;
      longestPalindromeStr = s.slice(left, right + 1);
    }
  }
};
```
