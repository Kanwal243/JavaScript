//================================================================================
// 1 . Write a JavaScript program that accepts two numbers in two prompts and
// displays the larger one in the console
//================================================================================

// prompt user for first number
let num7 = prompt("Enter the First number:");

// prompt user for second number
let num8 = prompt("Enter the Second number:");

// convert the input strings to numbers
num7 = Number(num7);
num8 = Number(num8);

// compare the two numbers and display the larger one in the console
if (num7 > num8) {
  console.log(num7 + " is larger than " + num8);
} else if (num8 > num7) {
  console.log(num8 + " is larger than " + num7);
} else {
  console.log("The two numbers are equal.");
}

// Output value 4 is larger than 3

//================================================================================
// 2 Write a JavaScript conditional statement to find the sign of a number. Display
// an alert box with the specified sign.
// Sample: 3
// Output : The sign is +
// Sample: -5
// Output : The sign is -
//=================================================================================

let num = prompt("Enter a number:");
if(num > 0){
  alert("The sign is +");
} else if(num < 0) {
  alert("The sign is -");
} else {
  alert("The number is 0");
}

//=================================================================================
// 3. Write a JavaScript program that accepts five numbers in five prompts and
//displays the larger one in the console.
//=================================================================================

//Accept five numbers using prompts
const num1 = parseInt(prompt("Enter number 1:"));
const num2 = parseInt(prompt("Enter number 2:"));
const num3 = parseInt(prompt("Enter number 3:"));
const num4 = parseInt(prompt("Enter number 4:"));
const num5 = parseInt(prompt("Enter number 5:"));

// the largest number conditional
let largest = num1;

if (num2 > largest) {
  largest = num2;
}

if (num3 > largest) {
  largest = num3;
}

if (num4 > largest) {
  largest = num4;
}

if (num5 > largest) {
  largest = num5;
}

// The largest number in the console
console.log("The largest number is " + largest);


//=================================================================================
// 4 . Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.
// Sample
//  Output :
// "0 is even"
// "1 is odd"
// "2 is even"
//=================================================================================
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }
  
// 5. ==================================================================================
// Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grade.
// The grades are computed as follows :
// Range Grade
// <60    F
// <70    D
// <80    C
// <90    B
// <100   A
//==================================================================================
// HardCode value of an array of student marks
 const marks = [80, 90, 67, 55, 92, 75, 89];

// The average of the marks
const sum = marks.reduce((total, mark) => total + mark);
const average = sum / marks.length;

// the grade based on the average
let grade;
if (average < 60) {
  grade = "F";
} else if (average < 70) {
  grade = "D";
} else if (average < 80) {
  grade = "C";
} else if (average < 90) {
  grade = "B";
} else {
  grade = "A";
}

// Output the average and  grade
console.log(`The average marks is: ${average}`);
console.log(`The corresponding grade is: ${grade}`);

//Output

// The average marks is: 78.28571428571429
// app.js:133 The corresponding grade is: C

//==================================================================================
// 6 - Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz".
//==================================================================================

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
//1
//2
// app.js:147 Fizz
// app.js:151 4
// app.js:149 Buzz
// app.js:147 Fizz ..... So On

//==================================================================================
// 7 - Write a JavaScript program to construct the following pattern, using a nested
// for loop.
// *
// * *
// * * *
// * * * *
// * * * * *
//==================================================================================

for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += '* ';
    }
    console.log(row);
  }
  