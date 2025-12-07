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

const BMI1 = markWeight/(markHeight * markHeight);
const BMI2 = johnWeight/(johnHeight * johnHeight);
const HigherBMI = BMI1 > BMI2;
console.log(BMI1, BMI2);
console.log(HigherBMI)

// Test 2
const marksWeight = 95;
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
const canDrive = 15;
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
console.log(century);