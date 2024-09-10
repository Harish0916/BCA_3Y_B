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

// let arr = [10, 20, 30, 40]
// arr.forEach((item, index) => document.write(`${index}: ${2*item}<br>`))


//----------------------------


// ls = [10,20,30,40,55,23,11,5]
// document.write(ls.filter(i=>i>30))
//---------------------

// cart = ["apple", "banana", "cherry"]
// document.write(cart,"<br>")

// function remove(item, cart){
//     document.write(cart.filter(i=> i!=item))
// }

// remove(prompt("Enter element to remove"), cart)

// document.write("<br>",cart)

//--------------------------------------

// ls = [10,20,30,40,55,23,11,5]
// const filt = i=> i%2==0
// document.write(ls.filter(filt))


// ls = [10,20,30,40,30]

// ls.find((i, id) =>  i==30 && document.write(`${id} for ${i}<br>`))


// ---------------

// const nums = [10,20,30]
// let acc = 0

// for (const num of nums){
//     acc = acc + num
// }
// document.write(acc)


// function allSum(nums){
//     return nums.reduce((acc, num)=> acc+num, 0)
// }
// let nums = [10, 20, 30, 100]
// document.write(allSum(nums))