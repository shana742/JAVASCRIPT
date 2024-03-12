// 50) Write a JavaScript program to get the current date.Expected Output: mm - dd - yyyy,
//     mm / dd / yyyy or dd - mm - yyyy, dd / mm / yyyy ?
        
        function getCurrentDate() {
            // Create a new Date object
            const currentDate = new Date();

            // Extract year, month, and day components
            const year = currentDate.getFullYear();
            const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
            const day = String(currentDate.getDate()).padStart(2, '0');

            // Choose your desired format
            const dateFormat = 'mm-dd-yyyy'; // or 'dd-mm-yyyy'

            // Format the output
            let formattedDate;
            switch (dateFormat) {
                case 'mm-dd-yyyy':
                    formattedDate = `${month}-${day}-${year}`;
                    break;
                case 'dd-mm-yyyy':
                    formattedDate = `${day}-${month}-${year}`;
                    break;
                default:
                    formattedDate = 'Invalid date format';
            }

            // Display the result
            console.log(`Current Date: ${formattedDate}`);
        }

 // Call the function
 getCurrentDate();
