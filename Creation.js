// HTML AND CSS REFRESHER//
// continuation with platform//
// still on code pen..............................................
//studying.
//started a course on Dive in and learn React 16.8 from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!

//Watched UDemy course continuation
//taking Udemy course  Maximilian Schwarzmüller 
//Continueing to  studying
//taking udemy course CONTINUATION

// working on project 2...

// working on coding challange

//now working on project 3.....

// lectures CONTINUATION with Maximilian Schwarzmuller

//reviewing handlebars online


// var personIKnow = "Andrea";

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


// switch (personIKnow) {
//   case "Janet":
//     console.log(`${personIKnow} is my mom`);
//     break;
//   case "Andrea":
//      console.log(`${personIKnow} is my gf`);
//     break;
//   case "Brandon":
//        console.log(`${personIKnow} is my boy`);
//     break;
//   case "Felicia":
//          console.log(`${personIKnow} Bye bih`);
//     break;
//   default:
//   console.log("Who duh fuh iz dis")
//     Statements executed when none of the values match the value of the expression
//     break;
// } 



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

// var bouncer = "kenneth";
// console.log(`Welcome to Club Solano! Your bouncer today is ${bouncer}`);
// for (var i = 0; i <= 66; i++){
// console.log(`This girl is ${i} years old`);

// if (i < 18) {
//   console.log(`GET YO ${i} YEAR OLD THE FUH OUT HERE!`)
// } else if (i >= 18 && i < 21){
//   console.log(`Nice try ${i} aged fake ass bih`)
// } else if (i >= 21 && i <= 40){
//   console.log(`Welcome to club Solano BIHHH`);
// } else {
//   console.log(`Bye hoe ${i} year old are not welcome here!`);
// }

// }
// for (var i = 1; i <= 30; i++){
//   if (i % 7 === 0) { continue; }
//   else if (i % 2 !==0 && (i - 1) % 10 === 0) {
//     console.log("monkey");
//   }
  
  
//   else if (i % 10 === 0 || i % 15 === 0){
//     console.log("Donkey");
//   }
//   else {
//     console.log(i)
//   }
// }

// //important code to study below

// for (var i = 1; i <= 30; i++){
//   if (i % 7 === 0) { continue; }
//   else if (i % 2 !==0 && (i - 1) % 10 === 0) {
//     console.log("monkey");
//   }
  
  
//   else if (i % 10 === 0 || i % 15 === 0){
//     console.log("Donkey");
//   }
//   else {
//     console.log(i)
//   }
// }

// var dcCharacterArray = ["Superman", "Flash", "Batman", "Kenneth"];

// for (var i = 0; i < dcCharacterArray.length; i++){
// console.log(dcCharacterArray[i]);

// if (dcCharacterArray[i] === "Batman"){
//     console.log("I will kill you");
//   } else if (dcCharacterArray[i] === "Flash"){
//     console.log("I am the fastest man alive!")
//   } else if (dcCharacterArray[i] === "Superman"){
//     console.log("I am the man of steel")
//   } else {
//     console.log("DC RULES!")
//   }
// }

// _____________________________________________

// for (var i = 1; i <= 50; i++){
//   if (i % 7 === 0){
//     console.log(i);
//       i +=1;
//         continue;
//   } else if (i % 10 === 0 || i % 15 ===0){
//       console.log("donkey");
//         continue;
//   } else if (i % 2 !== 0 && (i - 1) % 10 === 0){
//     console.log("monkey")
//   }
  
  
  
  
//   console.log(i);
  
  
// }

// Replace last array below

// var animalArray = ["Dog", "Cat", "Fish", "Lizard", "Whale", "Cheetah"];
// console.log("Original: " + animalArray);
// console.log("------");

// animalArray.push("Monkey", "Lion");
// console.log(animalArray);

// animalArray.splice(0,2);
// console.log(animalArray);

// var lastIndex = animalArray.length - 1;
// var lastElement = animalArray[lastIndex];

// console.log(lastElement);

// animalArray.splice(lastIndex, 1, "last");
// console.log(animalArray);