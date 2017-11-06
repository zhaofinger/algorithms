/**
 * @Author: zhaoFinger
 * @Date: 2017-11-07 00:46:22
 * @Last Modified by:   zhaoFinger
 * @Last Modified time: 2017-11-07 00:46:22
 */

/**
 * 快排序
 * @param {array} arr 数组
 * @return {array} 排序后的数组
 */
const quickSort = arr => {
	if (arr.length <= 1) {
		return arr;
	}
	let key = arr.splice(Math.floor(arr.length / 2), 1)[0];
	let leftArr = [];
	let rightArr = [];
	arr.forEach(item => {
		if (item <= key) {
			leftArr.push(item);
		} else {
			rightArr.push(item);
		}
	});
	return quickSort(leftArr).concat([key], quickSort(rightArr));
};

console.log(quickSort([3, 2, 31, 1, 4, 100, 6, 7]));