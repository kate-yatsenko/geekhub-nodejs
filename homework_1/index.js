const array = [1, 2, 3, 7, 15, -3, 21];

function findCritical(arr, sign) {
  return arr.reduce((a, b) => sign * (a - b) > 0 ? a : b);
}

function sum(nums) {
  return nums.reduce((a, b) => {
    if (/\D/.test(b)) {
      return a
    }
    return a + b
  })
}

function replaceMinAndMax(nums) {
  const maxNumber = findCritical(nums, 1),
    minNumber = findCritical(nums, -1);

  nums[nums.indexOf(maxNumber)] = minNumber;
  nums[nums.indexOf(minNumber)] = maxNumber;

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
  const handledSecondString = secondString.split('');

  const maxLength = Math.max(secondString.length, firstString.length);
  firstString.split('').forEach(letter => {
    const index = handledSecondString.indexOf(letter);
    if (index !== -1) {
      points += 1;
      handledSecondString.splice(index, 1);
    }
  });
  return (points / maxLength * 100).toFixed(2) + '%'
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
  return (methods[newExp[operator]](+numbers[0], +numbers[1])).toFixed(2)
}

console.log(replaceMinAndMax(array));
callback(1, 2, function (...arguments) {
  console.log('callback', arguments)
});
console.log(replace(array));
console.log(compareStrings('work', 'awork'));
console.log(calculate('1.1  + 3'));
