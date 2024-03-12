// 13) Convert temperature Fahrenheit to Celsius ? (Conditional logic Question)

    // Function to convert Fahrenheit to Celsius
    function fahrenheitToCelsius(fahrenheit) {
        const celsius = (5 / 9) * (fahrenheit - 32);
        return celsius;
    }

// Taking user input for Fahrenheit temperature
const fahrenheitInput = parseFloat(prompt("Enter temperature in Fahrenheit:"));

// Checking if the input is a valid number
if (!isNaN(fahrenheitInput)) {
    // Convert Fahrenheit to Celsius
    const resultCelsius = fahrenheitToCelsius(fahrenheitInput);
    console.log(`${fahrenheitInput} Fahrenheit is equal to ${resultCelsius.toFixed(2)} Celsius`);
} else {
    console.log("Invalid input. Please enter a valid number.");
}