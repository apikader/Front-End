function reverseNumber(number) {
    let reversed = 0;
    while (number !== 0) {
    let lastDigit = number % 10;
    reversed = (reversed * 10) + lastDigit;
    number = Math.floor(number / 10); }
    return reversed; }
    let myNumber = prompt("Enter a number to get the reverse?");
    let myReversedNumber = reverseNumber(myNumber);
    console.log(myReversedNumber);
    
    
    function isDivisible(num){
      for(let i = 1; i <= 100; i++){
        if(i % num == 0) 
        console.log(i);
      }
    }
    let num3 = prompt('what number u want to test if divisible?');
    isDivisible(num3);
    