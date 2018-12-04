/**
 * 抽取幸运小伙子
 * @param {number} count
 * @param {number} startIndex
 * @param {number} endIndex
 */
function getLuckyPeople(count = 10, startIndex = 1, endIndex = 4) {
  let result = {};
  for (let i = 0; i < count; i++) {
    let temp = Math.floor(Math.random() * endIndex + startIndex);
    if (result[temp]) {
      result[temp]++;
    } else {
      result[temp] = 1;
    }
  }
  return result;
}

console.log(getLuckyPeople(100000));