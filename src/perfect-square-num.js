/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if (num === 1) return true;
  /**
   * @param {number} flag
   * @param {number} limit
   * @return {number}
   */
  var findSquareNum = function(flag, limit) {
      var squareTemp = flag * flag;
      if (flag === limit) return 0;
      if (squareTemp === num) {
          // 找到平方数
          return flag;
      } else if (squareTemp < num) {
          return findSquareNum(flag + Math.ceil((limit - flag) / 2), limit);
      } else {
          if (flag === 1) return 0;
          return findSquareNum(Math.ceil(flag / 2), flag);
      }
  };
  var squareNum = findSquareNum(Math.ceil(num / 2), num);
  return Boolean(squareNum);
};

console.log(isPerfectSquare(81));