// 27)  Write to find minimum number among 3 numbers using ternary operator in JS ?
    
    // Function to find the minimum number among three numbers using the ternary operator
    function findMinNumber(num1, num2, num3) {
        const minNumber = (num1 < num2) ? ((num1 < num3) ? num1 : num3) : ((num2 < num3) ? num2 : num3);
        console.log(`The minimum number among ${num1}, ${num2}, and ${num3} is: ${minNumber}`);
    }

   // Example usage
     findMinNumber(7, 12, 5);   // Output: The minimum number among 7, 12, and 5 is: 5
findMinNumber(3, 8, 10);   // Output: The minimum number among 3, 8, and 10 is: 3
findMinNumber(15, 4, 9);   // Output: The minimum number among 15, 4, and 9 is: 4