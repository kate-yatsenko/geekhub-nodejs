const array = [1, 2, 3, 7, 15, -3, 21];

function findMax(nums) {
  let maxNumber = Number.NEGATIVE_INFINITY;
  nums.forEach(num => {
    if (num > maxNumber) {
      maxNumber = num;
    }
  });
  return maxNumber;
}

function findMin(nums) {
  let minNumber = Number.POSITIVE_INFINITY;
  nums.forEach(num => {
    if (num < minNumber) {
      minNumber = num;
    }
  });
  return minNumber;
}

function sum(nums) {
  return nums.reduce((a, b) => a + b)
}

function replaceMinAndMax(nums) {
  const maxNumber = findMax(nums),
    minNumber = findMin(nums),
    maxIndex = nums.indexOf(maxNumber),
    minIndex = nums.indexOf(minNumber);
  nums[maxIndex] = minNumber;
  nums[minIndex] = maxNumber;

  return {
    maxNumber,
    minNumber,
    sum: sum(nums),
    nums,
  };
}

function callback(...arguments) {
  const func = arguments.pop();
  return func(...arguments)
}

function replace(nums) {
  return nums.map((num) => {
    if (!(num % 3) && !(num % 7)) {
      return 'foobar'
    } else if (!(num % 3)) {
      return 'foo'
    } else if (!(num % 7)) {
      return 'bar'
    }
    return num
  })
}

function compareStrings(firstString, secondString) {
  let points = 0;
  const maxLength = findMax([secondString.length, firstString.length]);
  firstString.split('').forEach(letter => {
    const index = secondString.indexOf(letter);
    if (index !== -1) {
      points += 1;
      secondString.split('').splice(index, 1)
    }
  });
  return points / maxLength * 100 + '%'
}

function calculate(exp) {
  const newExp = exp.replace(/\s/g, '');
  if (!newExp.match(/^[\d]+[.]?[\d]*[+\/\-*][\d]+[.]?[\d]*$/)) {
    return `Invalid expression: ${exp}`
  }
  const operator = newExp.search(/[+\-*\/]/);
  const numbers = newExp.split(newExp[operator]);
  const methods = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
  };
  return methods[newExp[operator]](+numbers[0], +numbers[1])
}

console.log(replaceMinAndMax(array));
callback(1, 2, function (...arguments) {
  console.log('callback', arguments)
});
console.log(replace(array));
console.log(compareStrings('work', 'awork'));
console.log(calculate('1.1  + 3'));
