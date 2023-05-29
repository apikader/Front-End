function power(x, y) {
    if (y === 0) {
      return 1;
    } else if (y % 2 === 0) {
      let result = power(x, y / 2);
      return result * result;
    } else {
      return x * power(x, y - 1);
    }
  }
  let myX = prompt("Please, Enter the value of x");
  let myY = prompt("Now, Enter the value of y (x^y)");
  let myPower = power(myX, myY);
  console.log(myPower);
  