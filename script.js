// 1a
let randomNum = Math.floor(Math.random() * 5) + 1;
console.log(randomNum);

// 1b
if (5 >= 4) {
    console.log("Greater than or equal to 4");
}   else if (5 == 2 || 3 == 3){
    // else if (randonNum == 2 || 3) shorthand (Always use === instead of equals its better.)
    console.log("Equal to 2 or 3");
}   else {
    console.log("Equal to 1");
}

// 1c
if (randomNum != 3){
    console.log("Not equal to 3");
} 

// 1d
if (randomNum !== 3 && randomNum !== 5) 
// if (randomNum !== 3 && 5) shorthand
{
    console.log("NOT equal to 3 AND not equal to 5");
}    

// 1e
if (randomNum == 2 || randomNum == 4) {
    console.log("Equal to 2 OR equal to 4");
}

// Bonus
// 2
randomNum >= 4 ? console.log ("Greater than or equal to 4") : console.log("Less than 4");

// Another example for Bonus 2

console.log(randomNum >= 4 ? "Greater than or equal to 4" : "Less than 4");

// 3
//Switch Statement takes in a parameter/argument and returns something based on the CASE (or the match) that the parameter/argument goes with
// In this example if randomNum is 1 it will run the console.log("One"); code, if randomNum is 2 it will run the console.log ("Two")
console.log("Random Number:", randomNum)
switch (randomNum) {
    case 1:
        console.log("One");
        // BREAK Keywords are needed between each case so that the code for the case that follows is NOT run as well
    break;    
    case 2:
        console.log("Two");
    break;    
    case 3:
        console.log("Three");
    break;    
    case 4:
        console.log("Four");
    break;    
    case 5:
        console.log("Five");
    // If not of the conditional statements are me the default will run. // Default works like ELSE in a Conditional Statement (If the value does not match any of the cases,. then it will run what is in the default)
    default:
        console.log("Five");
        // There is no need for a BREAK at the end of the Switch Statement since there are no other cases/possibilities   
}

// 

// DECISION MAKING EXERCISE

// 1a
let randomNum = Math.floor(Math.random() * 5 + 1);
// let randomNum = Math.floor(Math.random() * 5) + 1;
console.log(randomNum);

// 1b
if (randomNum >= 4) {
  console.log("Greater than or equal to 4");
} else if (randomNum === 2 || randomNum === 3) {
  console.log("Equal to 2 or 3");
} else {
  console.log("Equal to 1");
}

// Another Example for 1b

if (randomNum >= 4) {
// Same as line above
// if (randomNum > 3) {
  console.log("Greater than or equal to 4");
} else if (randomNum >= 2) {
// Same as line above
// } else if (randomNum > 1) {
  console.log("Equal to 2 or 3");
} else {
  console.log("Equal to 1");
}

// 1c
if (randomNum !== 3){
  console.log("Not equal to 3");
}

// Another Example for 1c

if (randomNum === 1 || randomNum === 2 || randomNum === 4 || randomNum === 5) {
  console.log("Not equal to 3");
}

// 1d
if (randomNum !== 3 && randomNum !== 5){
  console.log("NOT equal to 3 AND not equal to 5");
}

// Another Example for 1d

if (randomNum === 1 || randomNum === 2 || randomNum === 4) {
console.log(randomNum);
  console.log("NOT equal to 3 AND not equal to 5");
}

// 1e
if (randomNum === 2 || randomNum === 4) {
  console.log("Equal to 2 or equal to 4");
}

// BONUS
// 2
randomNum >= 4 ? console.log("Greater than or equal to 4") : console.log("Less than 4");

// Another example for 2
console.log(randomNum >= 4 ? "Greater than or equal to 4" : "Less than 4");

// 3
// Switch Statement takes in a parameter/argument and returns something based on the CASE (Or the match) that the parameter/argument goes with
// In this example if randomNum is 1 it will run the console.log("One"); code, if randomNum is 2 it will run the console.log("Two"); code, etc.
switch (randomNum){
  case 1:
    console.log("One");
    // Break keywords are needed between each case so that the code for the cas that follows is NOT run as well
    break;
  case 2:
    console.log("Two");
    break;
  case 3:
    console.log("Three");
    break;
  case 4:
    console.log("Four");
    break;
  case 5:
    console.log("Five");
  // Default works like ELSE in a Conditional Statement (If the value does not match any of the cases,. then it will run what is in the default)
  // default:
  //   console.log("Five");
  // There is no need for a BREAK at the end of the Switch Statement since there are no other cases/possibilities
}