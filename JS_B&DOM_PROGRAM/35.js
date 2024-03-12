// 35)  Write a program make a summation of given number(E.g., 1523 Ans: - 11) in JS ?
    
    // Function to calculate the sum of digits in a number
    function sumOfDigits(number) {
        let sum = 0;

        // Convert the number to a string to iterate through its digits
        const numberString = Math.abs(number).toString();

        // Iterate through each digit and add it to the sum
        for (let i = 0; i < numberString.length; i++) {
            sum += parseInt(numberString[i], 10);
        }

        return sum;
    }

  // Example usage
  const givenNumber = 1523;
const result = sumOfDigits(givenNumber);

console.log(`Sum of digits in ${givenNumber}: ${result}`);