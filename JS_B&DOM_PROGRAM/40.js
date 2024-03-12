// 40) Write a JavaScript Program to display the current day and time in the following format. 
//    Sample Output: Today is Friday.Current Time is 12 PM: 12 : 22 2 ?

function getCurrentDayAndTime() {
        // Days of the week
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        // Get current date and time
        const currentDate = new Date();
        const currentDay = daysOfWeek[currentDate.getDay()]; // 0 is Sunday, 1 is Monday, etc.

        let hours = currentDate.getHours();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // Convert 0 to 12-hour format

        const minutes = currentDate.getMinutes();
        const seconds = currentDate.getSeconds();

        // Format the output
        const output = `Today is ${currentDay}. Current Time is ${hours} ${ampm}: ${minutes} : ${seconds}`;

        // Display the result
        console.log(output);
    }

 // Call the function
 getCurrentDayAndTime();