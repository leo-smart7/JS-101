/*let js = "amazing";
console.log(4+98+61-19);*/

// Data types
/*let javaScriptIsFun = true;
console.log(javaScriptIsFun);
javaScriptIsFun = "YES!";
console.log(javaScriptIsFun);*/

// Basic operators
/*const currentYear = 2025;
const mySisterAge = currentYear - 2006;
const myAge = currentYear - 2003;
console.log(myAge, mySisterAge);*/

// Comparison Operator
/*console.log(myAge > mySisterAge);
console.log(mySisterAge > myAge);
console.log(myAge >= mySisterAge);*/

// Operator precedence
/*const currentYear = 2025;
const mySisterAge = currentYear - 2006;
const myAge = currentYear - 2003;
console.log(currentYear - 2006 > currentYear - 2003)*/

/*let iHaveNoIdeaWhatImDoing = "Hello world!";
// alert(iHaveNoIdeaWhatImDoing);
console.log(iHaveNoIdeaWhatImDoing);

iHaveNoIdeaWhatImDoing = 7 * 4;
console.log(iHaveNoIdeaWhatImDoing);*/

/*let sample1 = "Hello👋";
let sampleTwo = "I'm Leo, I'm an E-rank developer";
// alert(sample1+""+sampleTwo);
console.log(sample1+""+sampleTwo);*/

/*let calc = (4 * 14) + 9;
console.log(calc);

const skillLevel = 5;
const skillFourYrs = 1000;
console.log(skillLevel > skillFourYrs);
console.log(skillFourYrs > skillLevel);
console.log(typeof skillLevel);*/

// Test 1
/*const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

const MarkBMI = markWeight/(markHeight * markHeight);
const JohnBMI = johnWeight/(johnHeight * johnHeight);
const HigherBMI = MarkBMI > JohnBMI;
console.log(MarkBMI, JohnBMI);
console.log(HigherBMI);*/

// Test 2
/*const marksWeight = 95;
const marksHeight = 1.88;
const johnsWeight = 85;
const johnsHeight = 1.76;

const BMIone = marksWeight/(marksHeight * marksHeight);
const BMItwo = johnsWeight/(johnsHeight * johnsHeight);
const BMI = BMIone > BMItwo;
console.log(BMIone, BMItwo);
console.log(BMI);*/

// Strings and template literals
/*const myName = "Leonard";
const job = "Novice spellcaster";
const detail = "I'm " + myName + ", a " + job+ "!";
console.log(detail);
// template literals
const newDetails = `I'm ${myName}, a ${job}!`;
console.log(newDetails);

const Test = `I'm just 
testing out
somethings...nice 👍`;
console.log(Test);*/

// Making decision
/*const canDrive = 15;
const notDrive = 17;
const age = canDrive > notDrive;

if (age) {
    console.log(`Sarah is old enough to drive!`);
} else {
    console.log(`Nora is not old enough to drive!`)
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);*/

// Coding challenge #2
/*const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

const MarkBMI = markWeight/(markHeight * markHeight);
const JohnBMI = johnWeight/(johnHeight * johnHeight);
const HigherBMI = MarkBMI > JohnBMI;

if (HigherBMI) {
    console.log(`Mark's BMI (${MarkBMI}) is higher than John's (${JohnBMI})!`);
}else  {
    console.log(`John's BMI (${JohnBMI}) is higher than Mark's (${MarkBMI})!`)
}*/

// Type conversion 
/*const inputYear = '1991';
console.log(Number(inputYear) + 20);
console.log(String(24) + 20);*/

// Type Coercion
/*console.log("I'm " + 24 + " Years old!");
console.log('23'-'10'- 3);
console.log('54' * '62');
console.log('1' + 1);*/

// Truthy and falsy values
// 5 falsy values: 0,'', undefined, NaN, null

/*const money = "";
if (money) {
    console.log("Don't spend it all")
}else {
    console.log("Go get a job!")
}*/

// Equality Operators
/*const age = 13;

if (age) {
    console.log(`You're officially an adult!`)
}else {
    console.log(`You're still a baby...lol`)
}*/

/*const favourite = prompt(`what's you're favourite food?`);

if (favourite === 'rice') {
    console.log(`Cool! rice is an amazing food!`)
}else if (favourite === 'beans') {
    console.log(`beans is a good food too!`)
}else {
    console.log(`Not rice or beans`)
}*/

/*const hasDriversLicence = true;
const hasGoodVision = true;
console.log (hasDriversLicence && hasGoodVision);
console.log (hasDriversLicence || hasGoodVision);
console.log (!hasDriversLicence);

// if (hasDriversLicence && hasGoodVision) {
//     console.log (`Sarah should drive!`)
// }else {
//     console.log(`Someone else should!`)
// }

const isTired = false;
// console.log (hasDriversLicence || hasGoodVision && isTired);

if (hasDriversLicence && hasGoodVision && !isTired) {
    console.log (`Sarah should drive!`)
}else {
    console.log(`Someone else should!`)
}*/

// Coding Challenge #3
//  const dolphineScore = (96 + 108 + 89) / 3;
//  const  koalaScore = (88 + 91 + 110) / 3;
//  console.log (dolphineScore, koalaScore);

//  if (dolphineScore > koalaScore) {
//     console.log(`The dolphine team win!`)
//  }else if (koalaScore > dolphineScore) {
//     console.log(`The koala team win!`)
//  }else if (dolphineScore === koalaScore) {
//     console.log(`It's a tie!`)
//  }

 /*const dolphineScore = (97 + 112 + 101) / 3;
 const  koalaScore = (109 + 95 + 106) / 3;
 console.log (dolphineScore, koalaScore);

 if (dolphineScore > koalaScore && dolphineScore >= 100) {
    console.log(`The dolphine team win!`)
 }else if (koalaScore > dolphineScore && koalaScore >= 100) {
    console.log(`The koala team win!`)
 }else if (dolphineScore === koalaScore && dolphineScore >= 100 && koalaScore >= 100) {
    console.log(`Both team wins the trophy!`)
 }else {
    console.log(`No one won the trophy`)
 }*/

// Switch Statement
