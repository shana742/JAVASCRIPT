// 25) Write to find number is even or odd using ternary operator in JS ?
    
    // Function to check if a number is even or odd using the ternary operator
    function checkEvenOrOdd(number) {
        const result = (number % 2 === 0) ? 'even' : 'odd';
        console.log(`${number} is ${result}.`);
    }

  // Example usage
    checkEvenOrOdd(4);   // Output: 4 is even.
checkEvenOrOdd(7);   // Output: 7 is odd.
checkEvenOrOdd(0);   // Output: 0 is even.