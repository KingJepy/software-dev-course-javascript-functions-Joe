/*
===========================================
🔁 Function Refactoring Activity
===========================================

🎯 Objective:
Students will identify repetitive or poorly organized code in a given script
and refactor it by creating programmer-defined functions.

This activity reinforces:
- Writing functions with no, single, and multiple parameters
- Using return statements effectively
- Improving code reusability and modularity

---
🧭 Instructions:

1️⃣ Analyze the provided script, which performs a series of repetitive tasks.

2️⃣ Identify sections of code that can be improved using functions.

3️⃣ Write reusable functions with appropriate parameters and return statements.

4️⃣ Refactor the original code to use your new functions.

5️⃣ Test the refactored script to ensure it produces the same output as the original.

---
*/

// ============================================
// ❌ Original Code (Before Refactoring)
// ============================================

// Script 1 - Greeting multiple users
/*
console.log("Welcome, Alice!");
console.log("Welcome, Bob!");
console.log("Welcome, Charlie!");
*/

// Script 2 - Sum calculation
/*
let num1 = 5, num2 = 10;
let sum = num1 + num2;
console.log("The sum of 5 and 10 is " + sum);
*/



// Script 3 - Product calculation
/*
let product = num1 * num2;
console.log("The product of 5 and 10 is " + product);
*/


// Script 4 - Print names from a list
/*
let names = ["Alice", "Bob", "Charlie"];
console.log("Names in the list:");
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
*/


/*
===========================================
🛠️ Steps for Refactoring
===========================================

🔹 Break Down Tasks into Functions:
   - Identify repetitive patterns (e.g., greetings, calculations, list printing)
   - Define separate functions for each task

🔹 Write Functions with Parameters and Return Values:
   - Parameterize functions for flexibility (e.g., pass in name, numbers, arrays)
   - Use return statements where necessary

🔹 Refactor the Original Code:
   - Replace repeated code with meaningful function calls
   - Keep your code clean, readable, and easy to maintain
*/

// ✅ Your refactored code goes below this line!

//I put the names in an array, then created a function for it to print, and finally started a loop iterating throught he array using its position as the argument
let users = [`Alice`, `Bob`, `Charlie`];


function greeting(name){
   return `Welcome, ${name}!`;
}
for (i = 0; i < users.length; i++){
   console.log(greeting(users[i]));
}

//I created a funtion that starts with a placeholder value for sum and the equation, then I returned the statemnet with the arguments printed inside. finally I called the function
function addingNumbers(num1, num2){
   let sum = num1 + num2;
   return `The sum of ${num1} and ${num2} is ${sum}`;
}
console.log(addingNumbers(4, 5));
console.log(addingNumbers(15, 9));

//I set up a function with a placehiolder variable for the equation. I then returned the string I wanted with the arguments inside. finally I called the function
function multiplyingNumbers(num1, num2){
   let product = num1 * num2;
   return `The product of ${num1} and ${num2} is ${product}`;
}
console.log(multiplyingNumbers(4, 5));
console.log(multiplyingNumbers(12, 3));

//I used the same logic on this as the first example. the only difference being that the for loop is inside the function itself. finally I called the function
let names = ["Alice", "Bob", "Charlie"];

function printNames(namesArray){
   console.log("Names in the list:");
   for (i = 0; i < namesArray.length; i++){
      console.log(namesArray[i]);
   }
}
printNames(names);