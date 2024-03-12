// 29) Write to show
//   i.Monday to Sunday using switch case in JS ?
    // Function to display the day of the week using switch case
    function displayDay(dayNumber) {
        let day;

        switch (dayNumber) {
            case 1:
                day = "Monday";
                break;
            case 2:
                day = "Tuesday";
                break;
            case 3:
                day = "Wednesday";
                break;
            case 4:
                day = "Thursday";
                break;
            case 5:
                day = "Friday";
                break;
            case 6:
                day = "Saturday";
                break;
            case 7:
                day = "Sunday";
                break;
            default:
                day = "Invalid day";
        }

        console.log(`Day ${dayNumber} corresponds to ${day}`);
    }

   // Example usage
     displayDay(3);  // Output: Day 3 corresponds to Wednesday
    displayDay(6);  // Output: Day 6 corresponds to Saturday
    displayDay(8);  // Output: Day 8 corresponds to Invalid day



// ii. Vowel or Consonant using switch case in JS?

    // Function to check if a character is a vowel or consonant using switch case
    function checkVowelOrConsonant(character) {
        switch (character.toLowerCase()) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                console.log(`${character} is a vowel.`);
                break;
            default:
                console.log(`${character} is a consonant.`);
        }
    }

// Example usage
checkVowelOrConsonant('A');  // Output: A is a vowel.
checkVowelOrConsonant('b');  // Output: b is a consonant.
checkVowelOrConsonant('e');  // Output: e is a vowel.
