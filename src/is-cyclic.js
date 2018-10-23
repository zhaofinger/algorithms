function isCyclic (o) {
  /**
   *
   * @param {object} o
   * @param {object} target
   */
  if (Array.prototype.toString.call(o) === '[object Window]') return false;

  function compare(o, targetArr) {
    if (Array.prototype.toString.call(obj) !== '[object Object]') return false;

    const keysArr = Object.keys(o);

    for (let i = 0; i < keysArr.length; i++) {
      if (targetArr.includes(o[keysArr[i]])) {
        return true;
      } else {
        return compare(o[keysArr[i]], [...targetArr, o[keysArr[i]]])
      }
    }
    return false;
  }
  return compare(o, [o]);
}

// const c = {};
var obj = { foo: { bar: { baz: { qux: {} } } } };
obj.foo.bar.baz.qux = obj.foo;
// c.c = c;

let result = isCyclic(obj);
console.log(result);
