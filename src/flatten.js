// 数组判定
const isArray = data => Object.prototype.toString.call(data).toLowerCase() === '[object array]';

/**
 * 数组二向箔
 * 数组一维化，将多维数组转化为一维数组
 * @param {*} arr
 * @return {array} 一维化后的数组
 */
const flatten = arr => {
  let result = [];
  arr.forEach(item => {
    if (isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  });
  return result;
};

console.log(flatten([1, [2], [3, [[4]]]]));

