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

// Self Practice on Functions
function fruit(apples, oranges) {
    const fruitJuice = `I made fruit juice with ${apples} apples, and ${oranges} oranges!`;
    return fruitJuice;
}

const fruitMixer = fruit(4, 7);
console.log(fruitMixer);

function anime(demonslayer, naruto) {
    const animeOtaku = `I love watching ${demonslayer} and ${naruto}`;
    return animeOtaku;
}

console.log(anime('demon slayer', 'Naruto'));