/**
 * 节流
 * @param {function} fn
 * @param {number} intervalTime
 */
function throttle(fn, intervalTime) {
  let flagTime = 0;
  return function() {
    let nowTime = Date.now();
    if (nowTime - flagTime > intervalTime) {
      fn();
      flagTime = Date.now();
    }
  };
}

// 样例
const logTime = () => {
  console.log(new Date());
}

window.onscroll = throttle(logTime, 1000);