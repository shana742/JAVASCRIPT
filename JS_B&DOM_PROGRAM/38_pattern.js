// 38) Use pattern in console.log in JS ?
//     1) 1
//        1 0
//        1 0 1
//        1 0 1 0
//        1 0 1 0 1

    // Function to print the pattern
    function printPattern(rows) {
        for (let i = 1; i <= rows; i++) {
            let rowOutput = '1';

            for (let j = 1; j < i; j++) {
                rowOutput += (j % 2 === 0) ? ' 0' : ' 1';
            }

            console.log(rowOutput);
        }
    }

// Example usage
const numberStri = 5;
printPattern(numberOfRows);

//  2) A 
//      B C
//      D E F
//      G H I J 
//      K L M N O

    // Function to print the pattern
    function printPattern() {
        let currentChar = 65; // ASCII value for 'A'
        let count = 1;

        for (let i = 1; i <= 5; i++) {
            let rowOutput = '';

            for (let j = 1; j <= i; j++) {
                rowOutput += ` ${String.fromCharCode(currentChar)}`;
                currentChar++;
                count++;
            }

            console.log(rowOutput.trim());
        }
    }

// Example usage
printPattern();


// 3) 1
//    2 3
//    4 5 6
//    7 8 9 10
//    11 12 13 14 15
    
    // Function to print the pattern
    function printPattern(rows) {
        let currentNumber = 1;

        for (let i = 1; i <= rows; i++) {
            let rowOutput = '';

            for (let j = 1; j <= i; j++) {
                rowOutput += ` ${currentNumber}`;
                currentNumber++;
            }

            console.log(rowOutput.trim());
        }
    }

// Example usage
const numberrows = 5;
printPattern(numberOfRows);

// 4)
//   *
//   * *
//   * * *
//   * * * *
//   * * * * *


    // Function to print the pattern
    function printPattern(rows) {
        for (let i = 1; i <= rows; i++) {
            let rowOutput = '';

            for (let j = 1; j <= i; j++) {
                rowOutput += ' *';
            }

            console.log(rowOutput.trim());
        }
    }

// Example usage
const numberOfRows = 5;
printPattern(numberOfRows);
