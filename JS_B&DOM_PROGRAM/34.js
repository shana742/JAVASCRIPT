// 34) Write to print number in reverse order e.g.: number = 64728 -- -> reverse =82746 in JS ?
   
    // Function to reverse the digits of a number
    function reverseNumber(number) {
        const reversedString = String(number).split('').reverse().join('');
        const reversedNumber = parseInt(reversedString, 10);
        return reversedNumber;
    }

  // Example usage
  const originalNumber = 64728;
const reversedNumber = reverseNumber(originalNumber);

console.log(`Original number: ${originalNumber}`);
console.log(`Reversed number: ${reversedNumber}`);