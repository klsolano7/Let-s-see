//HTML AND CSS REFRESHER//
//continuation with platform//
//still on code pen............................//

var personIKnow = "Andrea";

// if (personIKnow === "Janet") {
// console.log(`${personIKnow} is my mom`);
// } else if (personIKnow === "Andrea") {
//   console.log(`${personIKnow} is my gf`);
// } else if (personIKnow === "Brandon") {
// console.log("my boy");
// } else if (personIKnow === "Felicia"){
//   console.log("bye Felicia");
//   console.log(`bye ${personIKnow}`);
// } else {
//  console.log("Who da fuh iz dis");
// }


switch (personIKnow) {
  case "Janet":
    console.log(`${personIKnow} is my mom`);
    break;
  case "Andrea":
     console.log(`${personIKnow} is my gf`);
    break;
  case "Brandon":
       console.log(`${personIKnow} is my boy`);
    break;
  case "Felicia":
         console.log(`${personIKnow} Bye bih`);
    break;
  default:
  console.log("Who duh fuh iz dis")
    //Statements executed when none of the values match the value of the expression
    break;
} 



//  NOT
// var isSmart = true;
// isSmart = !isSmart
// if (!isSmart){
//   console.log("Go to school!");
// }


//  var hungry = true,
//     inTheMoodForBreakfast = true,
//     isLunchTime = false,
//     isDinnerTime = true,
//     isBreakfastTime = false;

// // If you're hungry, and it's lunch time
// if (hungry && isLunchTime){
//   console.log("Time to go to lunch!");
// // If it is dinner time, and you're not hungry
// } else if (isDinnerTime && !hungry){
//   console.log("Let's go for drinks, I'm not very hungry!");
// // If it's breakfast time, or I'm in the mood for breakfast
// } else if (isBreakfastTime || inTheMoodForBreakfast){
//   console.log("I could really go for some french toast...");
// } else {
//   console.log("Guess I'll have a snack")
// }