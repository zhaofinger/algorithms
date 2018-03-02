/**
 * @Author: zhaofinger
 * @Date: 2018-03-02 09:16:24
 * @Last Modified by: zhaofinger
 * @Last Modified time: 2018-03-02 09:36:54
 */

/**
 * 二维数组排列组合
 * @param {array} dyadicArray 二维数组
 * @return {array} 组合后的一维数组
 */
const arrayCombination = dyadicArray => {
  if (dyadicArray.length > 1) {
    let _dyadicArray = [];
    dyadicArray.forEach(item => {
      _dyadicArray.push(item);
    });
    let arr1 = _dyadicArray.shift();
    let arr2 = _dyadicArray.shift();
    let tempArr = [];
    arr1.forEach(item => {
      arr2.forEach(_item => {
        tempArr.push(`${item}|${_item}`);
      });
    });
    _dyadicArray.unshift(tempArr);
    return arrayCombination(_dyadicArray);
  } else {
    return dyadicArray[0];
  }
};
let testArray = [[1, 2, 3], ['a', 'b'], ['大', '中', '小']]
console.log(arrayCombination(testArray));