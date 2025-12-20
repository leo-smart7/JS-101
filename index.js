'use strict';
let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log(`I can drive!`);

// Functions
function logger() {
    console.log(`Introduction into functions in JavaScript!`);
}
logger();
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples, and ${oranges} oranges`;
    return juice;
}

const fruitMaker = fruitProcessor(4, 0);
console.log(fruitMaker);
// console.log(fruitProcessor(6, 8));
// console.log(fruitProcessor(7, 2));
// console.log(fruitProcessor(4, 0));

function fruitBlender(watermelon, grape)