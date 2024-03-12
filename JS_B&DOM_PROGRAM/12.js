// 12) WAP to convert years into days and days into years ?

    // Function to convert years to days
    function yearsToDays(years) {
        const daysInYear = 365.25; // Assuming an average year has 365.25 days to account for leap years
        const days = years * daysInYear;
        return days;
    }

   // Function to convert days to years
    function daysToYears(days) {
    const daysInYear = 365.25;
    const years = days / daysInYear;
    return years;
}

// Taking user input for years
const yearsInput = parseFloat(prompt("Enter the number of years:"));

// Convert years to days
const resultDays = yearsToDays(yearsInput);
console.log(`${yearsInput} years is equal to ${resultDays} days`);

// Taking user input for days
const daysInput = parseFloat(prompt("Enter the number of days:"));

// Convert days to years
const resultYears = daysToYears(daysInput);
console.log(`${daysInput} days is equal to ${resultYears} years`);