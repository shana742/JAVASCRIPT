// 32)  Write to print factorial of given number ?
   
    // Function to calculate the factorial of a given number
    function calculateFactorial(number) {
        if (number < 0) {
            console.log("Factorial is not defined for negative numbers.");
        } else {
            let factorial = 1;

            for (let i = 1; i <= number; i++) {
                factorial *= i;
            }

            console.log(`The factorial of ${number} is: ${factorial}`);
        }
    }

  // Example usage
     calculateFactorial(5);   // Output: The factorial of 5 is: 120
calculateFactorial(0);   // Output: The factorial of 0 is: 1
calculateFactorial(-3);  // Output: Factorial is not defined for negative numbers.