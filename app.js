//Question 01

// let studentname = [];

//Question 02

// console.log(studentname = ("Asad"))

//Question 03

// var studentname = ("Anas","Zahid","Alishba")

//Question 04

// var numbers = ('1','2','3')

//Question 05

// var booleanarray = [true,false,true,false]

//Question 06

// var mixedarray =[true,false,"a",'b',"1","2"]

//Question 07

// var names = ["SSC",'HSC',"BCS","BS","BCOM","MS","M.PHIL","Phd"]

//Question 08

// var  students = ["Michael","Jhon","Tony"]

// var scorStudent = [320,230,480];

// console.log(`${students[0]} ${scorStudent[0]} score hai ${(scorStudent[0] / 500)*100} `);

// console.log(`${students[1]} ${scorStudent[1]} score hai ${(scorStudent[1] / 500)*100} `);

// console.log(`${students[2]} ${scorStudent[2]} score hai ${(scorStudent[2] / 500)*100} `);

//Question 09

// var colorNames = ["red", "blue", "green"];
// console.log("Initial Color Names:", colorNames);

// // a. Add color to the beginning
// var newColorBegin = prompt("Enter a color to add to the beginning:");
// colorNames.unshift(newColorBegin);
// console.log("After Adding to the Beginning:", colorNames);

// // b. Add color to the end
// var newColorEnd = prompt("Enter a color to add to the end:");
// colorNames.push(newColorEnd);
// console.log("After Adding to the End:", colorNames);

// // c. Add two more colors to the beginning
// var color1 = prompt("Enter the first color to add to the beginning:");
// var color2 = prompt("Enter the second color to add to the beginning:");
// colorNames.unshift(color1, color2);
// console.log("After Adding Two More Colors to the Beginning:", colorNames);

// // d. Delete the first color in the array
// colorNames.shift();
// console.log("After Deleting the First Color:", colorNames);

// // e. Delete the last color in the array
// colorNames.pop();
// console.log("After Deleting the Last Color:", colorNames);

// // f. Add a color at a specific index
// var indexToAdd = prompt("Enter the index at which you want to add a color:");
// var colorToAdd = prompt("Enter the color you want to add:");
// colorNames.splice(indexToAdd, 0, colorToAdd);
// console.log("After Adding Color at Index " + indexToAdd + ":", colorNames);

// // g. Delete colors at a specific index
// var indexToDelete = prompt("Enter the index from which you want to delete colors:");
// var numberOfColorsToDelete = prompt("Enter the number of colors you want to delete:");
// colorNames.splice(indexToDelete, numberOfColorsToDelete);
// console.log("After Deleting " + numberOfColorsToDelete + " Colors from Index " + indexToDelete + ":", colorNames);


//Question 10

// var studentScores = [85, 92, 78, 90, 88, 76];

// console.log("Original Scores:", studentScores);

// studentScores.sort(function(a, b) {
//     return a - b;
// });

// console.log("Sorted Scores (Ascending):", studentScores);
