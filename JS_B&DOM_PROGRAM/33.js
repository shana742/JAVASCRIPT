// 33)  Write to print Fibonacci series up to given numbers ?
   
// Function to print Fibonacci series up to a given number
    function printFibonacciSeries(limit) {
        let fibSeries = [];
        let a = 0, b = 1, nextTerm;

        while (a <= limit) {
            fibSeries.push(a);
            nextTerm = a + b;
            a = b;
            b = nextTerm;
        }

        console.log(`Fibonacci series up to ${limit}: ${fibSeries.join(', ')}`);
    }

  // Example usage
  const limit = 50; // Set the limit for the series
printFibonacciSeries(limit);