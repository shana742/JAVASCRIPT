// 46) Write a JavaScript program to clone an array ?
    
    // Using the spread operator
    function cloneArrayWithSpread(originalArray) {
        return [...originalArray];
    }

   // Using Array.from()
     function cloneArrayWithArrayFrom(originalArray) {
    return Array.from(originalArray);
}

// Example usage
const originalArray = [1, 2, 3];
const clonedArraySpread = cloneArrayWithSpread(originalArray);
const clonedArrayArrayFrom = cloneArrayWithArrayFrom(originalArray);

console.log(originalArray);          // Output: [1, 2, 3]
console.log(clonedArraySpread);      // Output: [1, 2, 3]
console.log(clonedArrayArrayFrom);   // Output: [1, 2, 3]