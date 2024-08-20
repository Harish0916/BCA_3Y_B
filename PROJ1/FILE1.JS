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
// let fruit = prompt("Enter fruit name");

// switch (fruit) {
//   case "apple":
//     console.log("You chose an apple.");
//     break;
//   case "banana":
//     console.log("You chose a banana.");
//     break;
//   default:
//     console.log("Unknown fruit.");
// }

// -----------------

// var name = "RAVI"
// let age = 28
// const isIndian = true

// document.write(`${name}, you are ${age}yr older ${isIndian?"indian":"other"} nationality`)

// ------------------------------------

// var fname = 'GLA'     // Global Scope

// function show() {
//   fname = 'Codingoes'   // local Scope
//   document.write(fname)     // Codingoes
// }

// show()
// document.write(fname) // GLA



// -------------------

// function outer() {
//     let fname = "GLA"
//     function inner(){
//         fname = "Codingoes"
//         document.write(fname, "<br>")
//     }
//     inner()
//     document.write(fname, "<br>")
// }
// outer()



// --------------


// FUNCTION SCOPE by var only

// function msg() {
//     var txt = "Good bye"
//     document.write(txt)
// }
// msg()
// document.write(txt)
// // ----------------
// // Block scope - by let only
// {
//     let txt = "Good bye"
//     document.write(txt)
// }

// document.write(txt)

// --------------------
// var myvar
// console.log(myvar);
// myvar = "GLA"


// ---------------------

// let Student = {
//     id: 101,        // Number
//     sname: "Lucky", // String
//     isStudent: true,    // Boolean
// }

// // console.log(typeof Student.id);

// console.log(Student.id);
// console.log(Student.sname);
// console.log(Student.isStudent);
//------------------------


// let Student = {
//     id: 101,        // Number
//     sname: "Lucky", // String
//     isStudent: true,    // Boolean
// }

// let {id:_id, sname: name, isStudent: ist} = Student

// // console.log(typeof Student.id);

// console.log(_id);
// console.log(name);
// console.log(ist);


// ------------------
// Update Objects
// let Student = {
//     id: 101,        // Number
//     sname: "Lucky", // String
//     isStudent: true,    // Boolean
// }

// console.log(Student['id']);

// Student.id = 102
// console.log(Student["id"])

// Student["age"] = 22
// console.log(Student);

// Student.isStudent = false
// console.log(Student);


//------------

// DElete Object

// let Student = {
//     id: 101,        // Number
//     sname: "Lucky", // String
//     isStudent: true,    // Boolean
// }
// console.log(Student);

// delete Student.isStudent

// console.log(Student);
// --------------

// let Student = {
//     id: 101,        // Number
//     sname: "Lucky", // String
//     isStudent: true,    // Boolean
// }
// console.log(Student);
// // Delete object working only key value pair

// Student = {} // Then overwrite it to delete completely it

// console.log(Student);

// -----------------------


