function Phone() {
  const values = [
    { number: [1], letters: [''] },
    { number: [2], letters: ['a', 'b', 'c'] },
    { number: [3], letters: ['d', 'e', 'f'] },
    { number: [4], letters: ['g', 'h', 'i'] },
    { number: [5], letters: ['j', 'k', 'l'] },
    { number: [6], letters: ['m', 'n', 'o'] },
    { number: [7], letters: ['p', 'q', 'r', 's'] },
    { number: [8], letters: ['t', 'u', 'v'] },
    { number: [9], letters: ['w', 'x', 'y', 'z'] },
    { number: [0], letters: [' '] },
  ];
  const modes = ['number', 'letters'];
  const phoneField = document.getElementById('phone-field');

  this.buttonIndex = 0;
  this.valuesIndex = 0;
  this.timer = null;
  this.mode = 0;

  this.checkButtonIndex = function (buttonIndex) {
    if (this.buttonIndex === buttonIndex) {
      if (this.timer) {
        if (this.valuesIndex === values[this.buttonIndex][modes[this.mode]].length - 1) {
          this.valuesIndex = 0;
        } else {
          this.valuesIndex++;
        }
      } else {
        this.valuesIndex = 0;
      }
    } else {
      this.valuesIndex = 0;
    }
    this.buttonIndex = buttonIndex;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      phoneField.value += values[this.buttonIndex][modes[this.mode]][this.valuesIndex];
      this.timer = null;
    }, 300);
  };

  this.changeMode = function () {

    this.mode = Number(!this.mode);

  };

  this.remove = function () {
    phoneField.value = phoneField.value.slice(0, -1);
  }
}

const phone = new Phone();
