// 1. Dynamic Age Calculator
// Use a traditional function to calculate the user’s age.
//     Prompt the user to enter their birth year using prompt() and store it in a variable.
//     Based on their input, determine how many years old they are.
//     Log the calculated age to the console: “Your age is:”

/*
function ageCalc()
{
    let birthYear = prompt("Please enter your birth year: ");
    birthYear = new Date().getFullYear() - birthYear;
    console.log("Your age is: " + birthYear);
}
ageCalc();
*/

// 2. Simple Interest Calculator
// Use a traditional function named calculateSimpleInterest to calculate the simple interest using the formula:
//     Simple Interest = (Principal × Rate × Time)/100
// Prompt the user for the principal amount, rate of interest, and time in years using prompt().
//     Store each of these in a separate variable
// Log the result to the console: “Your simple interest is:”

/*
function calculateSimpleInterest()

{
    let principle = prompt("Enter the principle amount: ");
    let rate = prompt("Enter the rate of interest: ");
    let years = prompt("Enter the length of the loan in years: ");

    console.log("Your simple interest is: " + (principle * rate * years)/100);
}
calculateSimpleInterest();
*/

// 3. Favorite Color Selector
// Create an array with three colors.
//     Use a traditional function named addColor to add a new color to an array.
//     Takes one argument - the array of colors
// Prompt the user to input a color name to add to the array.
//     Prepend the users color to the existing array
// Log the updated array to the console using: “Updated colors: “


/*
let colors = ["red", "green", "blue"];
function addColor(colorArray)
{
    let inputColor = prompt("Input a color name to add to my array");

    colorArray.unshift(inputColor);

    console.log("Updated colors: " + colorArray);
}
addColor(colors);
*/

// 4. Event Countdown with Date Object
// Use a traditional function named calculateDaysUntil to calculate the number of days remaining until a future event.
//     Takes one argument - users event date
// Prompt the user to input the event date in the format YYYY-MM-DD.
//     If not in this format - make the user enter in correct format
// Use the Date object to calculate the difference in days between today and the event.
//     Log the result to the console using: “Days until the event: “.

/*
function calculateDaysUntil(inputDate)
{
    let eventDate = new Date(inputDate);
    const lengthOfDayInMilli = 1000 * 3600 * 24;
    return Math.round((eventDate - new Date()) / lengthOfDayInMilli) + 1;
}

function isValid(inputDate)
{
    //Check for the '-'s
    if (inputDate.indexOf("-", inputDate.indexOf("-") + 1) <= 0)
        return false;

    let output = new Date(inputDate);

    return !isNaN(output);
}

let userDate = prompt("Enter the event date in the format YYYY-MM-DD.");

while (!isValid(userDate))
    userDate = prompt("Please enter a valid event date in the format YYYY-MM-DD.");

console.log("Days until the event: " + calculateDaysUntil(userDate));
 */

// 5. Temperature Classifier
// Use a traditional function named classifyTemperature to classify a temperature.
//     Takes one argument - user input for temperature
//     Prompt the user to input the temperature in Celsius.
//     Convert into Farenheit using this formula
// Fahrenheit = (C x (9/5)) + 32
// Use conditionals to classify the temperature as:
//     "Hot," if over 100
// "Warm," if over 80
// "Cold” if under 40
// “Chilly” for everything else
// Error message if number not entered
// Log the classification to the console using: “The temperature is: “

/*
function classifyTemperature(inputTemp)
{
    let fahrenheit = (inputTemp * (9/5)) + 32;

    if (fahrenheit > 100)
        return "Hot";

    if (fahrenheit > 80)
        return "Warm";

    if (fahrenheit < 40)
        return "Cold";

    return "Chilly";
}

let input = prompt("Input the temperature in Celsius.");

if (isNaN(+input)) {
    console.error("Invalid number for temperature in Celsius");
}
else
    console.log("The temperature is: " + classifyTemperature(input));
*/

// 6. Student Array Operations
// Hardcode an array of students, each with a name and age based on this info: Alice is 20, Bob is 22, and Charlie is 18
// Use a fat arrow function to modify a student's age in an array of student objects.
// Prompt the user to input the name of the student to modify
// If student does not exist, log an error message
// Prompt the user to input a new age.
// If not a number, log an error message
// Update the student’s age in the array of objects.
//     Log the updated array to the console: “Updated students: ”

/*
let students = {"alice" : 20, "bob" : 22, "charlie" : 18};

//get user input
let name = prompt("Enter the name of the student to modify").toLowerCase();

if (typeof (students[name]) == "undefined")
    console.error("Student name entered does not exist");

let age = prompt("Enter new age for student");

if (isNaN(+age))
    console.error("Entered age is not a valid number");

age = Number(age);

let modify = (name, age) => {if (typeof (students[name]) != "undefined") {students[name] = age; return students; } else return "invalid input."};

students = modify(name, age);
console.log("Updated students: ", students)
*/

// 7. Grade Classification
// Use a fat arrow function named classifyGrade to classify grades.
//     Prompt the user to input a grade as a number.
//     Use conditionals to classify the grade as "A," "B," "C," "D," or "F."
// ONLY use ternaries!!!!
//     Log the result to the console using: “The grade classification is: “

/*
let classifyGrade = (grade) => {return (grade >= 90 ? "A" : grade >= 80 ? "B" : grade >= 70 ? "C" : grade >= 60 ? "D" : "F")};

let num = prompt("Enter a number grade");

console.log ("The grade classification is: ", classifyGrade(num));
*/


// 8. Shopping List Operations
// Hardcode an array representing a shopping list of eggs, butter, flour, and eggs.
//     Use a fat arrow function named modifyItem to modify items in an array.
//     Takes two arguments - the shopping list array and the prompted new item form user.
//     Log the updated array to the console using: “Updated shopping list: “.

/*
let shopping = ["eggs", "butter", "flour", "eggs"];

let modifyItem = (array, newItem) => {array.push(newItem); return array;}

let userInput = prompt("Enter a new item to add to the shopping list");

shopping = modifyItem(shopping, userInput);

console.log("Updated shopping list: ", shopping);
*/

// 9. Weekday Detector
// Use a fat arrow function to determine the day of the week.
//     Use the Date object to get the current day.
//     Log the day of the week to the console using: “Today is: “

/*
const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let dayOfWeek = () => {let obj = new Date(); return obj.getDay();}

console.log("Today is: " + weekdays[dayOfWeek()]);
*/

// 10. How Long Until Graduation
// Use a fat arrow function to determine the day of the week.
//     Use the Date object to get the current day.
//     Log the day of the week to the console using: “Today is: “
// Display in this format: “2025, January 21st”
// NOTE: use -st, -nd, -rd, -th based on the numerical date
// 22nd, 5th, 9th, 23rd, etc….
// Log how many days left between the current date and last day of course work to the console using: “And you have <days> left in this web design program until graduation. “
// Last day is 5/17/25
// Rough idea. Does not need to be 100% accurate but should be within a few days of actual answer.

let ord = (n) => {return n>3 && n<21 ? "th" : n%10===1 ? "st" : n%10 === 2 ? "nd" : n%10 === 3 ? "rd" : "th"};
let currentDate = new Date();
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
console.log(currentDate.getDate());

console.log("Today is: " + currentDate.getFullYear() + ", " + monthNames[currentDate.getMonth()] + " " + currentDate.getDate() + ord(currentDate.getDate()));

let calculateDaysUntil = (inputDate) => {
    let eventDate = new Date(inputDate);
    const lengthOfDayInMilli = 1000 * 3600 * 24;
    return Math.round((eventDate - new Date()) / lengthOfDayInMilli) + 1;
}

console.log("And you have ", calculateDaysUntil("5/17/25"), "days left in this web design program until graduation.")
