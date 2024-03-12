
//45)  Write a JavaScript program to determine if a variable is array ?
    
    function isArray(variable) {
        return Array.isArray(variable);
    }

  // Example usage
  const exampleArray = [1, 2, 3];
const exampleString = 'Hello, World!';

console.log(isArray(exampleArray)); // Output: true
console.log(isArray(exampleString)); // Output: false
