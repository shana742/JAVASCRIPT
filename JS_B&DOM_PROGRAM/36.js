//  36) Write a program you have to make a summation of first and last Digit. (E.g., 1234 Ans: - 5) in JS ?
   
    // Function to calculate the sum of the first and last digits of a number
    function sumOfFirstAndLastDigit(number) {
        // Convert the number to a string to extract digits
        const numberString = Math.abs(number).toString();

        // Get the first and last digits
        const firstDigit = parseInt(numberString[0], 10);
        const lastDigit = parseInt(numberString[numberString.length - 1], 10);

        // Calculate the sum
        const sum = firstDigit + lastDigit;

        return sum;
    }

   // Example usage
   const givenNumber = 1234;
const result = sumOfFirstAndLastDigit(givenNumber);

console.log(`Sum of the first and last digits in ${givenNumber}: ${result}`);