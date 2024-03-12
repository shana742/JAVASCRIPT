// 39) Accept 3 numbers from user using while loop and check each numbers palindrome ?
    
    // Function to check if a number is a palindrome
    function isPalindrome(number) {
        const originalNumber = number;
        let reversedNumber = 0;

        while (number > 0) {
            const digit = number % 10;
            reversedNumber = reversedNumber * 10 + digit;
            number = Math.floor(number / 10);
        }

        return originalNumber === reversedNumber;
    }

    // Accepting 3 numbers from the user
    let count = 0;
const numbers = [];

while (count < 3) {
    const userInput = prompt(`Enter number ${count + 1}:`);
    const parsedInput = parseInt(userInput);

    if (!isNaN(parsedInput)) {
        numbers.push(parsedInput);
        count++;
    } else {
        alert('Invalid input. Please enter a valid number.');
    }
}

// Checking if each number is a palindrome
for (let i = 0; i < numbers.length; i++) {
    const result = isPalindrome(numbers[i]);
    console.log(`${numbers[i]} is ${result ? 'a palindrome' : 'not a palindrome'}`);
}