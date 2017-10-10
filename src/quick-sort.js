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