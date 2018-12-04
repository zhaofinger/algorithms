/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let result = [];
  findQueen(0, n, [], result);
  return result;
};

/**
 * 寻找皇后
 * @param {number} row
 * @param {number} n
 * @param {array} singleResult
 * @param {array} result
 */
const findQueen = (row, n, singleResult, result) => {
  if (row === n) {
    result.push(generateSingle(singleResult));
    return singleResult;
  } else {
    for (let i = 0; i < n; i++) {
      if (checkQueen(singleResult, i)) {
        findQueen(row + 1, n, [...singleResult, i], result);
      }
    }
  }
}

/**
 * 生成解
 * @param {array} arr
 */
const generateSingle = arr => {
  let length = arr.length;
  return arr.map(item => {
    let temp = new Array(length - 1).fill('.');
    temp.splice(item, 0, 'Q');
    return temp.join('');
  });
};

/**
 * 检查该皇后是否合格
 * @param {array} pointArr 已确定皇后数组
 * @param {number} nowPoint 当前待检测皇后
 */
const checkQueen = (pointArr, nowPoint) => {
  let length = pointArr.length;
  for (let i = 0; i < length; i++) {
    let item = pointArr[i];
    if (Math.abs(length - i) === Math.abs(nowPoint - item)) return false;
    if (item === nowPoint) return false;
  }
  return true;
}

solveNQueens(4);