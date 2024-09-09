// let arr = [10,'apple', 14.5, true]

// let newArr = arr.map(i=>i)

// document.write(newArr);

// ---------------

// let arr = [10,20,30,40,55,67,23,34,59]

// let newArr = arr.map(i => i%2==0 ? i : "")

// document.write(newArr)

// ------------------

// let arr = [10,20,30,40]

// let double = i => i*2
// let newArr = arr.map(double)

// document.write(newArr)

// ------------ forEach loop----

let arr = [10, 20, 30, 40]
arr.forEach((item, index) => document.write(`${index}: ${2*item}<br>`))

