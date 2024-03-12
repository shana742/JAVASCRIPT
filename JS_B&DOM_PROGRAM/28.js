// 28) Write to find the largest of three numbers in JS ?
    
    // Function to find the largest number among three numbers
    function findLargestNumber(num1, num2, num3) {
        let largestNumber;

        if (num1 >= num2 && num1 >= num3) {
            largestNumber = num1;
        } else if (num2 >= num1 && num2 >= num3) {
            largestNumber = num2;
        } else {
            largestNumber = num3;
        }

        console.log(`The largest number among ${num1}, ${num2}, and ${num3} is: ${largestNumber}`);
    }

  // Example usage
     findLargestNumber(80, 30, 155);   // Output: The largest number among 80, 30, and 155 is: 155
findLargestNumber(23, 18, 8);   // Output: The largest number among 23, 18, and 8 is: 23
findLargestNumber(35, 46, 9);   // Output: The largest number among 35, 46, and 9 is: 46