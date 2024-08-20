function card(id, sname, age, isWorking, img) {
  let info = `<div class="card">
    <img src="${img}" alt="No image" height="100px" width="100px">
    <h2>ID: ${id}</h2>
    <h2>Name: ${sname}</h2>
    <h3>Age: ${age} yr old </h3>
    <h3>Working/Student : ${isWorking ? "Working Profession" : "Student"}</h3> 
    </div>   
`;
  document.write(info);
}

card(
  102,
  "Kamlesh",
  18,
  false,
  "https://png.pngtree.com/png-clipart/20220615/original/pngtree-kid-student-back-to-school-in-uniform-wear-backpack-png-image_8043401.png"
);
card(
  101,
  "Kamlesh",
  18,
  false,
  "https://png.pngtree.com/png-clipart/20220615/original/pngtree-kid-student-back-to-school-in-uniform-wear-backpack-png-image_8043401.png"
);
card(
  101,
  "Kamlesh",
  18,
  false,
  "https://png.pngtree.com/png-clipart/20220615/original/pngtree-kid-student-back-to-school-in-uniform-wear-backpack-png-image_8043401.png"
);
card(
  101,
  "Kamlesh",
  18,
  false,
  "https://png.pngtree.com/png-clipart/20220615/original/pngtree-kid-student-back-to-school-in-uniform-wear-backpack-png-image_8043401.png"
);
card(
  101,
  "Kamlesh",
  18,
  false,
  "https://png.pngtree.com/png-clipart/20220615/original/pngtree-kid-student-back-to-school-in-uniform-wear-backpack-png-image_8043401.png"
);

