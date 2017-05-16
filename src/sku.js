/**
 * 拿到的数据
 *[
 *	 {'颜色': '红', '尺码': '大', '型号': 'A', 'id': '001'},
 *	 {'颜色': '红', '尺码': '中', '型号': 'A', 'id': '002'},
 *	 {'颜色': '红', '尺码': '大', '型号': 'B', 'id': '003'},
 *	 {'颜色': '黑', '尺码': '中', '型号': 'B', 'id': '004'},
 *	 {'颜色': '白', '尺码': '中', '型号': 'A', 'id': '005'},
 *	 {'颜色': '白', '尺码': '大', '型号': 'A', 'id': '006'},
 *	 {'颜色': '绿', '尺码': '大', '型号': 'B', 'id': '007'}
 *]
 */
/**
 * 显示到页面
 * {
 * 	'颜色': ['红', '黑', '白', '绿'],
 * 	'尺码': ['大', '中', '小'],
 * 	'型号': ['A', 'B']
 * }
 */

let goodsData = [
		{'颜色': '红', '尺码': '大', '型号': 'A', 'id': '001'},
		{'颜色': '红', '尺码': '中', '型号': 'A', 'id': '002'},
		{'颜色': '红', '尺码': '大', '型号': 'B', 'id': '003'},
		{'颜色': '黑', '尺码': '中', '型号': 'B', 'id': '004'},
		{'颜色': '白', '尺码': '中', '型号': 'A', 'id': '005'},
		{'颜色': '白', '尺码': '大', '型号': 'A', 'id': '006'},
		{'颜色': '绿', '尺码': '大', '型号': 'B', 'id': '007'},
		{'颜色': '绿', '尺码': '大', '型号': 'C', 'id': '008'}
	];
const sku = {
	// 原始数据
	data: goodsData,
	
	// 展示数据
	showData: {},

	// 所有属性二维数组
	allKeys: [],

	// 所有商品数据字典
	goodsDict: {},
	
	// 缓存查找数据
	cacheData: {},
	
	// 所有可选属性
	result: [],

	// 确定的ID
	resultID: '',
	/**
	 * 计算展示数据
	 * 计算字典数据
	 */
	calculateShowData() {
		for (let item of this.data) {
			let _dict = '';
			for (let key in item) {
				if (key !== 'id') {
					_dict += item[key] + ';';
				}
				if (this.showData[key]) {
					// 去重
					if (this.showData[key].indexOf(item[key]) === -1) {
						this.showData[key].push(item[key]);
					}
				} else {
					this.showData[key] = new Array(item[key]);
				}
			}
			this.goodsDict[_dict] = item.id;
		}

		for (let key in this.showData) {
			this.allKeys.push(this.showData[key]);
		}
	},
	/**
	 * 得到结果
	 */
	getResult(key) {
		// 如缓存中存在，则直接返回结果
		if (this.cacheData[key]) {
			return this.cacheData[key];
		}

		// 继续查找
		let result = '';
		for (let _key in this.goodsDict) {
			if (_key.indexOf(key) !== -1) {
				result += _key;
				this.result.push(_key);
			}
		}

		// 所有可选属性
		this.result = Array.from(new Set(result.split(';')));

		// 缓存数据
		this.cacheData[key] = this.result;
		if (this.result.length === 1) {
			console.log(this.result[0]);
			this.resultID = this.goodsDict[this.result[0]];
		}
		return this.result;
	},
};

sku.calculateShowData();
sku.getResult('红;中;A');
console.log(sku.result);
console.log(sku.resultID);