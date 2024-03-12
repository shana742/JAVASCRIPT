// 24) Write to check whether a number is negative, positive or zero ?
    
    // Function to check if a number is negative, positive, or zero
    function checkNumber(number) {
        if (number > 0) {
            console.log(`${number} is positive.`);
        } else if (number < 0) {
            console.log(`${number} is negative.`);
        } else {
            console.log(`${number} is zero.`);
        }
    }

   // Example usage
   checkNumber(5);     // Output: 5 is positive.
checkNumber(-3);    // Output: -3 is negative.
checkNumber(0);     // Output: 0 is zero.