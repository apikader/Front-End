function sumOfDigits(number) {
    if (number === 0) {
      return 0;
    } else {
      return (number % 10) + sumOfDigits(Math.floor(number / 10));
    }
  }
  let myNumber = prompt("Please, Enter a number?");
  let mySum = sumOfDigits(myNumber);
  console.log(mySum);
  