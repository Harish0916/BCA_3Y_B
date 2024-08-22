// Simple function in JavaScript

// function msg(){     // function definition
//     console.log("this is simple function");
// }

// msg()  /// function calling
// msg()  /// function calling
// msg()  /// function calling


//------------------

// function oddEven(num){
//     if(num%2 == 0){
//         return `${num} is even`
//     } else {
//         return `${num} is odd`
//     }
// }

// // console.log(oddEven(10))
// console.log(oddEven(prompt("Enter number")))
// -------------

// Function Expression

// let greeting = function(name){
//     console.log("Welcome", name);
// }

// greeting("Harish Ojha")

// ----------------

// let oddEven = function(num){
//     return `Number ${num} is ${num%2==0?"even": "odd"}`
// }
// console.log(oddEven(99));

//------------------
//  ARROW FUNCTION

// let greeting = (name) => {
//     return `Welcome, ${name}`
// }
// let greeting = (name) => `Welcome, ${name}`

// console.log(greeting("Ravi"))


let sum = (a,b) => a+b

console.log(sum(200,300))