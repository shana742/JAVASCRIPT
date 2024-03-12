// 37) Use console.log() and escape characters to print the following pattern in JS ?
   // 1 1 1 1 1
//  2 1 2 4 8
//   3 1 3 9 27
//   4 1 4 16 64
//   5 1 5 25 125


    // Function to print the pattern
    function printPattern(rows) {
        for (let i = 1; i <= rows; i++) {
            let rowOutput = `${i} `;
            let power = 1;

            for (let j = 1; j <= i; j++) {
                power *= i;
                rowOutput += `${power} `;
            }

            console.log(rowOutput.trim());
        }
    }

// Example usage
const numberOfRows = 5;
printPattern(numberOfRows);