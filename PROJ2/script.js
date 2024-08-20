let student = {
    id: 101,
    sname: "Anshul",
    age: 21, 
    isWorking: false,
    img:"https://png.pngtree.com/png-clipart/20220615/original/pngtree-kid-student-back-to-school-in-uniform-wear-backpack-png-image_8043401.png"
}

let {id, sname, age, isWorking, img} = student

let info = `
    <h1>IT'S MINE PORTFOLIO</h1>
    <img src="${img}" alt="No image" height="100px" width="100px">
    <h2>ID: ${id}</h2>
    <h2>Name: ${sname}</h2>
    <h3>Age: ${age} yr old </h3>
    <h3>Working/Student : ${isWorking ? "Working Profession": "Student"}
`
document.write(info)