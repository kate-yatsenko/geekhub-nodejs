const { count } = require('./timer');

module.exports = {
  myMap: function (callback, thisArg) {
    const results = [];
    for (let i = 0; i < this.length; i++) {
      count("newMethods", "myMap");
      results.push(callback.call(thisArg, this[i], i, this));
    }
    return results;
  },
  myForEach: function (callback, thisArg) {
    for (let i = 0; i < this.length; i++) {
      count("newMethods", "myForEach");
      if (this[i] !== undefined) {
        callback.call(thisArg, this[i], i, this);
      }
    }
  },
  myFilter: function (callback, thisArg) {
    const results = [];
    for (let i = 0; i < this.length; i++) {
      count("newMethods", "myFilter");
      if (callback.call(thisArg, this[i], i, this)) {
        results.push(this[i]);
      }
    }
    return results;
  },
  myPush: function (...elements) {
    count("newMethods", "myPush");
    this.splice(this.length, 0, ...elements);
    return this.length
  },
  mySort: function (callback) {
    function mergeSort(arr) {
      if (arr.length === 1) {
        return arr
      }
      const middle = Math.floor(arr.length / 2);
      const left = arr.slice(0, middle);
      const right = arr.slice(middle);
      return merge(
        mergeSort(left),
        mergeSort(right),
      )
    }

    function merge(left, right) {
      let result = [];
      let indexLeft = 0;
      let indexRight = 0;
      while (indexLeft < left.length && indexRight < right.length) {
        count("newMethods", "mySort");
        let _left = left[indexLeft];
        let _right = right[indexRight];
        if (callback) {
          callback = composeCompareFn(callback(left, right))
        }
        callback = (l, r) => l < r;
        if (callback(_left, _right)) {
          result.push(left[indexLeft]);
          indexLeft++
        } else {
          result.push(right[indexRight]);
          indexRight++
        }
      }
      return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
    }

    function composeCompareFn(compareResult) {
      if (Math.sign(compareResult) === -1)
        return false;
      if (Math.sign(compareResult) === 1)
        return true;
      if (compareResult === 0)
        return false;
    }

    return mergeSort(this)
  },
};


