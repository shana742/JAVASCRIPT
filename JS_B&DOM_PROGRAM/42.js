
// 42) Write a JavaScript program to compare two objects ?
    
    function areObjectsEqual(obj1, obj2) {
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);

        // Check if the number of keys is the same
        if (keys1.length !== keys2.length) {
            return false;
        }

        // Check if each key and its corresponding value are equal
        for (const key of keys1) {
            if (obj1[key] !== obj2[key]) {
                return false;
            }
        }

        // If all checks pass, the objects are considered equal
        return true;
    }

   // Example usage
   const objA = { a: 1, b: 2, c: 3 };
const objB = { a: 1, b: 2, c: 3 };
const objC = { a: 1, b: 2, c: 4 };

console.log(areObjectsEqual(objA, objB)); // Output: true
console.log(areObjectsEqual(objA, objC)); // Output: false