/**
 * @Author: zhaofinger
 * @Date: 2018-03-05 19:38:13
 * @Last Modified by: zhaofinger
 * @Last Modified time: 2018-03-05 19:40:28
 */

// 1
const delayConsole = index => {
  return function () {
    return new Promise(function (resolve, reject) {
      let delayTime = Math.random() * 1000;
      setTimeout(() => {
        resolve();
        console.log(index, delayTime);
      }, delayTime);
    });
  }
}

let arrayFunction = [
  delayConsole(0),
  delayConsole(1),
  delayConsole(2),
  delayConsole(3),
  delayConsole(4),
  delayConsole(5),
  delayConsole(6),
  delayConsole(7),
  delayConsole(8),
  delayConsole(9),
]

arrayFunction.reduce((prev, cur) => prev.then(cur), arrayFunction[0]());



// 2
let arr = [5, 4, 3, 2, 1];
function createPromise(i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(i);
      resolve();
    }, i * 1000);
  });
}

arr.reduce((prev, next) => prev.then(() => createPromise(next)), Promise.resolve());