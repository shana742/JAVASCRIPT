// 14) Write a JavaScript exercise to get the extension of a filename.?

    // Function to get the file extension from a filename
    function getFileExtension(filename) {
        // Split the filename by dot (.)
        const parts = filename.split('.');

        // Check if there is at least one dot in the filename
        if (parts.length > 1) {
            // Return the last part as the file extension
            return parts[parts.length - 1].toLowerCase();
        } else {
            // If no dot is found, return an empty string or handle accordingly
            return '';
        }
    }

  // Example usage
  const filename1 = "example.txt";
const filename2 = "document.pdf";
const filename3 = "image.jpeg";

console.log(`File extension of ${filename1}: ${getFileExtension(filename1)}`);
console.log(`File extension of ${filename2}: ${getFileExtension(filename2)}`);
console.log(`File extension of ${filename3}: ${getFileExtension(filename3)}`);
