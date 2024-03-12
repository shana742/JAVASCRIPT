// 41) Write a JavaScript program to get the current date ?
    function getCurrentDate() {
        // Create a new Date object
        const currentDate = new Date();

        // Get the current year, month, and day
        const year = currentDate.getFullYear();
        // Months are zero-indexed, so we add 1 to get the actual month
        const month = currentDate.getMonth() + 1;
        const day = currentDate.getDate();

        // Format the output
        const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;

        // Display the result
        console.log(`Current Date: ${formattedDate}`);
    }

 // Call the function
 getCurrentDate();
