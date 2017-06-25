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
// 模板渲染
var renderTpl = (template, params, pureHtml, escape) => {
	var rtn = template.replace(/\{\$(.+?)\}/gi, function (total, param) {
		return (params[param] === undefined) ? total : (escape ? encodeURIComponent(params[param]) : params[param]);
	});
	return pureHtml ? rtn : $(rtn);
};
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
	data: [],
	
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
	 * @param {string} key 查找关键字以；分割
	 * @return {array} 所有可选属性数组
	 */
	getResult(key) {
		// 如缓存中存在，则直接返回结果
		if (this.cacheData[key]) {
			return this.cacheData[key];
		}

		// 继续查找
		let result = '';
		for (let _key in this.goodsDict) {
			let keyArr = key.split(';');
			let _keyArr = _key.split(';');
			let arr = keyArr.concat(_keyArr);
			arr = Array.from(new Set(arr));
			if (arr.length === _keyArr.length) {
				result += _key;
				this.result.push(_key);
			}
		}

		// 所有可选属性
		this.result = Array.from(new Set(result.split(';')));

		// 缓存数据
		this.cacheData[key] = this.result;
		if (this.result.length === 1) {
			this.resultID = this.goodsDict[this.result[0]];
		}
		return this.result;
	},
	/**
	 * 页面渲染
	 */
	renderPage($cateTpl, $btnTpl, $dom) {
		let index = 0;
		for (let key in sku.showData) {
			if (key === 'id') {
				return;
			} else {
				let $item = renderTpl($cateTpl, {key}).appendTo($dom);
				sku.showData[key].forEach(item => {
					renderTpl($btnTpl, {item, index}).appendTo($item);
				});
			}
			index++;
		}
	},
	init(data, $parentText, $btnText, $wrapper) {
		this.data = data;
		this.calculateShowData();
		this.renderPage($parentText, $btnText, $wrapper);
	},
	pageShow($btn) {
		let choose = [];
		$btn.on('click', function() {
			let key = '';
			let index = $(this).attr('data-index');
			choose[index] = $(this).text();
			choose.forEach(item => {
				let $btn = $('button[data-name="' + item + '"]');
				if ($btn.hasClass('checked') && item === $(this).text()) {
					$btn.removeClass('checked');
					choose[index] = '';
				} else {
					$btn.addClass('checked').siblings().removeClass('checked');
					if (item !== '') {
						key += item + ';';
					}
				}
			});
			let result = sku.getResult(key);
			$btn.removeClass('can-check').attr('disabled', true);
			result.forEach(item => {
				$('button[data-name="' + item + '"]').addClass('can-check').attr('disabled', false);
			});
		});
	}
};

sku.init(goodsData, $('#cate_item').text(), $('#btn_arr').text(), $('.sku-wrapper'), $('.sku-wrapper button'));
sku.pageShow($('.sku-wrapper button'));
