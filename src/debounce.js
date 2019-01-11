/**
 * 防抖
 * @param {function} fn
 * @param {number} delay
 */
function debounce(fn, delay) {
  let timer;
  return function() {
    if (timer) clearTimeout(timer);
    let _this = this;
    let args = arguments;
    timer = setTimeout(() => {
      fn.apply(_this, args);
    }, delay)
  };
}

window.onscroll = debounce();