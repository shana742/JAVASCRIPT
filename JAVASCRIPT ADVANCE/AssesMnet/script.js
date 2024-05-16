



// Function to add task
function Addtask() {
    
    // Get the input box and its value
    const inputBox = document.getElementById("input-box");
    const taskText = inputBox.value.trim();
    
    // Check if the input is not empty
    if (taskText !== "") {
        // Create a new list item
        const listItem = document.createElement("li");
        listItem.textContent = taskText;

        // Append the new task to the list container
        const listContainer = document.getElementById("list-container");
        listContainer.appendChild(listItem);

        // Clear the input box after adding the task
        inputBox.value = "";
    } else {
        // Alert if the input is empty
        alert("Please enter a task!");
    }
}
