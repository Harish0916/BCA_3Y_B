// let a = 10;
// document.write(a, "<br/>")

// let b = 5;
// document.write(b, "<br/>")

// let sum = a + b;        // 15
// document.write(sum, "<br/>")

// let difference = a - b; // 5
// let product = a * b;    // 50
// let quotient = a / b;   // 2
// let remainder = a % b;  // 0
// let isEqual = (a == b); // false
// let isNotEqual = (a != b); // true
// let isGreater = (a > b);   // true
// let logicalAnd = (a > b && b < 10); // true

// ----------------------

// let fname = "John";  // String
// document.write("Hello ", fname, "<br>")

// let age = 30;       // Number
// document.write('Age', age, "<br>")

// let isStudent = false; // Boolean
// document.write(`Student - ${isStudent? "Yes": "No"} <br>`)

// let emptyValue = "i'm engineer"; // Null
// document.write(`About us ${emptyValue || "Write Something"}<br>`)

// let uninitialized; // Undefined
// document.write(!uninitialized && "Fill detail completely")


// ---------------





// let age = 16;
// if(age>17){
//     document.write("Eligible for vote")
// } else {
//     document.write("Not Eligible for vote");
// }
// document.write("<br>")
// // or

// document.write(age> 17 ? "Eligible for vote": "Not Eligible for vote")











//------------------------

// let number = prompt("Enter number");

// if (number > 0) {
//   console.log("The number is positive.");
// } else if (number < 0) {
//   console.log("The number is negative.");
// } else {
//   console.log("The number is zero.");
// }




// -----------------------
let fruit = prompt("Enter fruit name");

switch (fruit) {
  case "apple":
    console.log("You chose an apple.");
    break;
  case "banana":
    console.log("You chose a banana.");
    break;
  default:
    console.log("Unknown fruit.");
}