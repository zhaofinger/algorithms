/**
 * @Author: zhaoFinger
 * @Date: 2017-11-07 00:46:29
 * @Last Modified by:   zhaoFinger
 * @Last Modified time: 2017-11-07 00:46:29
 */

/**
 * 桶排序
 * @param {array} arr 数组
 * @param {number} bucketCount 桶数量
 * @return {array} 排序后的数组
 */
const bucketSort = (arr, bucketCount = 10) => {
	if (arr.length <= 1) {
		return arr;
	}

	// 初始化桶
	let len = arr.length;
	let buckets = [];
	let max = Math.max.apply(this, arr);
	let min = Math.min.apply(this, arr);

	// 每一个桶的数值范围
	let space = (max - min + 1) / bucketCount;

	// 将数值装入桶中
	arr.forEach(item => {
		let index = Math.floor((item - min) / space);
		if (buckets[index]) {
			buckets[index].forEach((_item, _index) => {
				if (item < _item) {
					buckets[index].splice(_index, 0, item);
				}
			});
		} else {
			buckets[index] = [];
			buckets[index].push(item);
		}
	});

	// 合并数组
	buckets = buckets.filter(item => item);
	let result = Array.prototype.concat.apply([], buckets);
	return result;
};

console.log(bucketSort([3, 2, 1, 4, 100, 12, 43, 65, 109, 87, 76, 65, 98, 31, 1, 4, 100, 6, 7], 5));
