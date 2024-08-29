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

// let a=10

// let show = a>5 ? "a is greater than 5": "a is not greater than 5"

// console.log(show);

//------------------------



// // program for a simple calculator

// // take the operator input
// const operator = prompt('Enter operator ( either +, -, * or / ): ');

// // take the operand input
// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// let result;

// // using if...else if... else
// if (operator == '+') {
//     result = number1 + number2;
// }
// else if (operator == '-') {
//     result = number1 - number2;
// }
// else if (operator == '*') {
//     result = number1 * number2;
// }
// else {
//     result = number1 / number2;
// }

// // display the result
// console.log(`${number1} ${operator} ${number2} = ${result}`);



// --------------------------------

// // Switch case
// let uname = "naman"
// switch(uname){
//     case "naman": console.log(`Hello, ${uname}`);break;
//     case "raj": console.log(`Hello, ${uname}`);break;
//     default: console.log("Invalid Username");break;
// }

// let days = 28
// switch(days){
//     case 28||29: console.log("february"); break;
//     case 30: console.log("April June  September November");break;
//     case 31: console.log("Jan Mar May july aug Oct Dec"); break;
//     default: console.log("Not days in any month");
// }





//-------------------------------
// // program for a simple calculator
// let result;

// // take the operator input
// const operator = prompt('Enter operator ( either +, -, * or / ): ');

// // take the operand input
// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// switch(operator) {
//     case '+':
//          result = number1 + number2;
//         console.log(`${number1} + ${number2} = ${result}`);
//         break;

//     case '-':
//          result = number1 - number2;
//         console.log(`${number1} - ${number2} = ${result}`);
//         break;

//     case '*':
//          result = number1 * number2;
//         console.log(`${number1} * ${number2} = ${result}`);
//         break;

//     case '/':
//          result = number1 / number2;
//         console.log(`${number1} / ${number2} = ${result}`);
//         break;

//     default:
//         console.log('Invalid operator');
//         break;
// }

// --------------------
// for loop
// for(let i=1; i<=10; i++){
//     console.log("for loop", i);
// }

// while loop
// let i=1
// while(i<=0){
//     console.log("while loop", i);
//     i++
// }

// Do while loop
let i=1
do{
    console.log("Do-while loop", i);
    i++
}while(i<=0)