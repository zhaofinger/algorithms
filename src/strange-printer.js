/**
 * https://leetcode-cn.com/problems/strange-printer/description/
 *
 * 有台奇怪的打印机有以下两个特殊要求：
 * 1、打印机每次只能打印同一个字符序列。
 * 2、每次可以在任意起始和结束位置打印新字符，并且会覆盖掉原来已有的字符。
 *
 * 给定一个只包含小写英文字母的字符串，你的任务是计算这个打印机打印它需要的最少次数。
 */

 /**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function(s) {
  const sArr = s.split('');

  // 记录dp
  const dpDict = {};

  const getStep = (stringArr, start, end, dpDict) => {
    if (start >= end) return 0;

    let dpIndex = `${start}_${end}`;

    if (dpDict[dpIndex]) return dpDict[dpIndex];

    // 最差情况第一个字符无相同
    dpDict[dpIndex] = 1 + getStep(stringArr, start + 1, end, dpDict);

    // 首尾 相同的
    for (let i = start + 1; i < end; i++) {
      if (stringArr[start] === stringArr[i]) {
        dpDict[dpIndex] = Math.min(dpDict[dpIndex], getStep(stringArr, start + 1, i, dpDict) + getStep(stringArr, i, end, dpDict));
      }
    }

    return dpDict[dpIndex];
  };

  return getStep(sArr, 0, sArr.length, dpDict);
};
console.log(strangePrinter('aba'));