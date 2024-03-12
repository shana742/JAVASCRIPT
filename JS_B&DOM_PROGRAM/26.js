// 26) Write find maximum number among 3 numbers using ternary operator in JS ?
    
    // Function to find the maximum number among three numbers using the ternary operator
    function findMaxNumber(num1, num2, num3) {
        const maxNumber = (num1 > num2) ? ((num1 > num3) ? num1 : num3) : ((num2 > num3) ? num2 : num3);
        console.log(`The maximum number among ${num1}, ${num2}, and ${num3} is: ${maxNumber}`);
    }

 // Example usage
    findMaxNumber(10, 23, 15);   // Output: The maximum number among 10, 23, and 15 is: 23
findMaxNumber(3, 8, 10);   // Output: The maximum number among 3, 8, and 10 is: 10
findMaxNumber(15, 14, 19);   // Output: The maximum number among 15, 14, and 19 is: 19