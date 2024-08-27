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


// let sum = (a,b) => a+b

// console.log(sum(200,300))

// ---------------

// IIF

// (function msg(){     // function definition
//     console.log("Happy Janmashtami");
// })()

// (function (a,b){
//     console.log(`sum of ${a} and ${b} is ${a+b}`);
// })(12,13)

// let msg = (function(){     // function definition
//     return "Happy Janmashtami";
// })()

// console.log(msg);

// ------------------------


// function *myGen(){
//     yield 1
//     yield 2
//     yield 3
//     yield 4
// }

// const g = myGen()
// console.log(g.next().value);
// console.log(g.next().value);
// console.log(g.next().value);
// console.log(g.next().value);
// console.log(g.next().value);


// function *myGen(){
//     for(let i=1; i<=10; i++){
//         yield i;
//     }
// }

// const g = myGen()
// for(let i=1; i<=10; i++){
//     console.log(g.next().value);
// }


// ---------------
// let a = 5
// console.log(a++ + ++a);   

//--------------------

// logical &&

// console.log( "hello" && "welcome"); // welcome
// console.log( "" && "welcome");  // blank
// console.log( "hello" && "");    // blank
// console.log(12 && 13);      // 13
// console.log(null && 13);    // null

// let a = 12
// console.log(a>10 && "a is greater than 10")
//                 // a is greater than 10

// console.log("hello")    // hello
// console.log(!"hello")   // false
// console.log(!!"hello")  // true


// OR Operator

// console.log( "hello" || "welcome"); // hello
// console.log( "" || "welcome");  // welcome
// console.log( "hello" || "");    // hello
// console.log(12 || 13);      // 12
// console.log(null || 13);    // 13


// let a = 12
// console.log(a>10 || "a is greater than 10")
//                 // true


// /---------------------

// Ternary operator

let a=10

let show = a>5 ? "a is greater than 5": "a is not greater than 5"

console.log(show);




