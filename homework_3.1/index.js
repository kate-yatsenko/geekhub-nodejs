const { myMap, myForEach, myFilter, myPush, mySort } = require('./methods');
const { time, timeEnd, logAll } = require('./timer');


Array.prototype.myMap = myMap;
Array.prototype.myForEach = myForEach;
Array.prototype.myFilter = myFilter;
Array.prototype.myPush = myPush;
Array.prototype.mySort = mySort;

const arr = [];

time("newMethods", "myPush");
for (let i = 1; i < 1000; i++) {
  arr.myPush(i);
}
timeEnd("newMethods", "myPush");

time("newMethods", "myForEach");
arr.myForEach(item => item + 1);
timeEnd("newMethods", "myForEach");

time("newMethods", "myMap");
arr.myMap(item => item * 10);
timeEnd("newMethods", "myMap");

time("newMethods", "mySort");
arr.mySort();
timeEnd("newMethods", "mySort");

time("newMethods", "myFilter");
arr.myFilter(item => item > 200);
timeEnd("newMethods", "myFilter");

logAll();
