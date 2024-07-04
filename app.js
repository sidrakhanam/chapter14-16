///////////////////////////Question # 1///////////////////////////////////

// let studentNames = [];

/////////////////////////Question # 2////////////////////////////////////

// let studentNames1 = new Array();

/////////////////////////Question # 3////////////////////////////////////

// let studentNames2 = ["Alice", "Bob", "Charlie"];

/////////////////////////Question # 4////////////////////////////////////

// let numbers = [1, 2, 3, 4, 5];


/////////////////////////Question # 5////////////////////////////////////

// let booleanArray = [true, false, true, false];


/////////////////////////Question # 6////////////////////////////////////

// let mixedArray = ["Alice", 42, true, { key: "value" }, [1, 2, 3]];

/////////////////////////Question # 7////////////////////////////////////

// let educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// let qualificationList = document.getElementById("qualificationList");
// educationQualifications.forEach(function(qualification) {
//     let listItem = document.createElement("li");
//     listItem.textContent = qualification;
//     qualificationList.appendChild(listItem);
// });

///////////////////////////Question # 8/////////////////////////////////

// let studentNames = ["Alice", "Bob", "Charlie"];
// let studentScores = [450, 390, 470];

// const totalMarks = 500;

// studentNames.forEach(function(name, index) {
//     let score = studentScores[index];
//     let percentage = (score / totalMarks) * 100;
//     console.log(`Name: ${name}, Score: ${score}, Percentage: ${percentage.toFixed(2)}%`);
// });


///////////////////////////Question # 9/////////////////////////////////

// // Initialize an array with color names
// let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];

// // Function to display the array in the browser
// function displayArray() {
//     document.getElementById('colorArray').innerText = `Colors: ${colors.join(', ')}`;
// }

// // Initial display
// displayArray();

// // Function to add a color to the beginning
// function addColorToBeginning() {
//     let color = document.getElementById('colorInput').value;
//     colors.unshift(color);
//     displayArray();
// }

// // Function to add a color to the end
// function addColorToEnd() {
//     let color = document.getElementById('colorInput').value;
//     colors.push(color);
//     displayArray();
// }

// // Function to add two more colors to the beginning
// function addTwoColorsToBeginning() {
//     let color1 = document.getElementById('colorInputTwo').value;
//     let color2 = prompt("Enter another color to add to the beginning:");
//     colors.unshift(color1, color2);
//     displayArray();
// }

// // Function to delete the first color
// function deleteFirstColor() {
//     colors.shift();
//     displayArray();
// }

// // Function to delete the last color
// function deleteLastColor() {
//     colors.pop();
//     displayArray();
// }

// // Function to add a color at a specific index
// function addColorAtIndex() {
//     let index = parseInt(document.getElementById('indexInput').value);
//     let color = document.getElementById('colorInputIndex').value;
//     colors.splice(index, 0, color);
//     displayArray();
// }

// // Function to delete colors from a specific index
// function deleteColorsAtIndex() {
//     let index = parseInt(document.getElementById('deleteIndexInput').value);
//     let count = parseInt(document.getElementById('deleteCountInput').value);
//     colors.splice(index, count);
//     displayArray();
// }


/////////////////////////Question # 10/////////////////////////////////

// // Student scores array
// let studentScores = [85, 72, 93, 68, 77];

// // Sorting the array in ascending order
// studentScores.sort(function(a, b) {
//     return a - b;
// });

// // Displaying the sorted array
// console.log("Sorted Student Scores (Ascending):", studentScores);

/////////////////////////Question # 11/////////////////////////////////

// // Initialize an array with city names
// let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// // Initialize an empty array for selected cities
// let selectedCities = [];

// // Copy three elements from cities array to selectedCities array
// selectedCities = cities.slice(0, 3);

// // Display the selected cities array
// console.log("Selected Cities:", selectedCities);


/////////////////////////Question # 12/////////////////////////////////

// // Array of strings
// var arr = ["This", "is", "my", "cat"];

// // Joining array elements into a single string
// var singleString = arr.join(" ");

// // Displaying the single string
// console.log(singleString);

/////////////////////////Question # 13/////////////////////////////////

// // Initialize an empty array to act as a queue
// let queue = [];

// // Function to add values to the end of the queue
// function enqueue(value) {
//     queue.push(value);
// }

// // Function to remove and return the first value from the queue
// function dequeue() {
//     if (queue.length === 0) {
//         return "Queue is empty";
//     }
//     return queue.shift();
// }

// // Example usage
// enqueue("Apple");
// enqueue("Banana");
// enqueue("Cherry");

// console.log("Removed from queue:", dequeue()); // Output: Removed from queue: Apple
// console.log("Removed from queue:", dequeue()); // Output: Removed from queue: Banana

// enqueue("Date");

// console.log("Removed from queue:", dequeue()); // Output: Removed from queue: Cherry
// console.log("Removed from queue:", dequeue()); // Output: Removed from queue: Date
// console.log("Removed from queue:", dequeue()); // Output: Queue is empty


/////////////////////////Question # 14/////////////////////////////////

// // Initialize an empty array to act as a stack
// let stack = [];

// // Function to add values to the end of the stack
// function push(value) {
//     stack.push(value);
// }

// // Function to remove and return the last value from the stack
// function pop() {
//     if (stack.length === 0) {
//         return "Stack is empty";
//     }
//     return stack.pop();
// }

// // Example usage
// push("Apple");
// push("Banana");
// push("Cherry");

// console.log("Removed from stack:", pop()); // Output: Removed from stack: Cherry
// console.log("Removed from stack:", pop()); // Output: Removed from stack: Banana

// push("Date");

// console.log("Removed from stack:", pop()); // Output: Removed from stack: Date
// console.log("Removed from stack:", pop()); // Output: Removed from stack: Apple
// console.log("Removed from stack:", pop()); // Output: Stack is empty


/////////////////////////Question # 15/////////////////////////////////


// Array of phone manufacturers
let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Begin writing the HTML content
document.write('<select id="manufacturerSelect">');

// Adding a default option
document.write('<option value="">Select a manufacturer</option>');

// Iterate over the array to create option elements
manufacturers.forEach(function(manufacturer) {
    document.write(`<option value="${manufacturer}">${manufacturer}</option>`);
});

// End the select element
document.write('</select>');
