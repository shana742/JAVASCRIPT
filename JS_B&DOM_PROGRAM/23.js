// 23)  Find the Character Is Vowel or Not ?
    
    // Function to check if a character is a vowel
    function isVowel(character) {
        // Convert the character to lowercase to handle both uppercase and lowercase vowels
        character = character.toLowerCase();

        // Check if the character is one of the vowels
        if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
            return true;  // The character is a vowel
        } else {
            return false;  // The character is not a vowel
        }
    }

   // Example usage
   const char1 = 'a';
const char2 = 'B';

console.log(`${char1} is a vowel: ${isVowel(char1)}`);  // Output: a is a vowel: true
console.log(`${char2} is a vowel: ${isVowel(char2)}`);  // Output: B is a vowel: false