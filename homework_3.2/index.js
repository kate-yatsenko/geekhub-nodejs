countWater = array => {
  let copy = [...array];

  let water = 0;
  let tmpWater = 0;
  let level = 0;

  copy.forEach((item, index) => {
    if (index !== 0) {
      if (item < copy[index - 1]) {
        tmpWater += copy[index - 1] - item;
        copy[index] = copy[index - 1];
        return;
      }
      water += tmpWater;
      tmpWater = 0;
    }
  });


  if (tmpWater) {
    for (let index = array.length - 1; index > 0; index--) {
      if (array[index] >= copy[index]) {
        break;
      }
      if (array[index] > level) {
        level = array[index]
      }
      tmpWater -= copy[index] - level;
    }
    water += tmpWater;
  }
  return water
};

console.log(countWater([2, 5, 1, 3, 1, 2, 1, 7, 7, 6])); // 17
console.log(countWater([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0])); // 10
console.log(countWater([7, 0, 1, 3, 4, 1, 2, 1])); // 9
console.log(countWater([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0])); // 10
console.log(countWater([2, 2, 1, 2, 2, 3, 0, 1, 2])); // 4
console.log(countWater([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8])); // 24
console.log(countWater([2, 2, 2, 2, 2])); // 0
