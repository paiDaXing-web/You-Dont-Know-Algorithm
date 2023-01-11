---
title: 01.不同的子序列
toc: content
nav:
  title: 算法
  order: 1
group:
  title: 动态规划
  order: 1
---

### 问题描述

- 来源： LeetCode 第 `115` 题
- 难度： 🔥🔥🔥 困难

- 描述：
  给定一个字符串`s` 和一个字符串`t` ，计算在`s`的子序列中`t` 出现的个数。
  字符串的一个子序列是指， 通过删除一些（ 也可以不删除） 字符且不干扰剩余字符相对位置
  所组成的新字符串。（ 例如， " A C E " 是" A B C D E " 的一个子序列， 而" A E C " 不是）
  题目数据保证答案符合 `32` 位带符号整数范围。

- 示例 1:

```bash

输入: s = "rabbbit", t = "rabbit"
输出: 3
解释:
如下图所示, 有 3 种可以从 s 中得到"rabbit"的方案。
`rabb`b`it`
`rab`b`bit`
`ra`b`bbit`
```

- 示例 2:

```bash
输入： s = " b a b g b a g " , t = " b a g "
输出： 5
解释：
如下图所示, 有5 种可以从s 中得到" b a g " 的方案。
`ba`b`g`bag
`ba`bgba`g`
`b`abgb`ag`
ba`b`gb`ag`
babg`bag`
```

- 提示

  > `0<=s.length,t.length<=1000` > `s` 和 `t` 由英文字母组成

### 动态规划解决
