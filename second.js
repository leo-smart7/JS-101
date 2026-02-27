'use strict';
// Function
function logger() {
    console.log("Ice cream");
}

logger();

function fruitprocessor(apples, oranges) {
    const juice = `Let's make some fruitjuice with ${apples} apples, and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitprocessor(3, 5);
console.log(appleJuice);
const orangejuice = fruitprocessor(4, 5);
console.log(orangejuice);

// Function Declaration vs Function Expression
// Function Declaration
function birthYear(calcAge) {
    const age = 2030 - calcAge;
    return age;
}
const crrtAge = birthYear(2012);
console.log(crrtAge);

function birthYears(calcAge) {
    return 2030 - calcAge;
}
const crrtAge1 = birthYears(1990);
console.log(crrtAge1);

// Function Expression
const ages = function (birthYear) {
    return 2030 - birthYear;
}
// const calcAge2 = age2(2005);
// console.log(calcAge2, crrtAge1);

// Arrow Functions
const age4 = birthYear => 2030 - birthYear;
const age5 = age4(2006);
console.log(age5);

const yearsUntilRetirement = birthYear => {
    const age = 2027 - birthYear;
    const retirement = 75 - age;
    return retirement;
}
console.log(yearsUntilRetirement(1982));

// Funtions calling other functions 
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitprocessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples)
    const orangePieces = cutFruitPieces(oranges)

    const juice = `Let's make some fruitjuice with ${applePieces} apple pieces, and ${orangePieces} orange pieces.`
    return juice;
}
console.log(fruitprocessor(2, 4));

// Coding challenge #1
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(5, 4, 3));

// Test 1
let scoreDolphines = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphines, scoreKoalas);

const checkWinner = function (avgdolphines, avgKoalas) {
    if (avgdolphines >= 2 * avgKoalas) {
        console.log(`Dolphines win 🏆(${avgdolphines} VS ${avgKoalas})`)
    } else if (avgKoalas >= 2 * avgdolphines) {
        console.log(`Koala's win 🏆 (${avgKoalas} VS ${avgdolphines})`)
    }else {
        console.log(`It's a tie!`)
    }
}

checkWinner (scoreDolphines, scoreKoalas);
checkWinner (110, 300)

// Test 2
scoreDolphines = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphines, scoreKoalas);
checkWinner(scoreDolphines, scoreKoalas);

// Introduction to Array
const friends = ['Micheal', 'James', 'Anthony'];
console.log(friends);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 3]);
friends[2] = 'Martins';
console.log(friends);

const bio = ['Leonard', 'Mustafa', 2026 - 2003, friends];
console.log(bio);

const calcAge = function (birthYear) {
    return 2037  - birthYear;
}

const year = [1990, 1967, 2002, 201, 2018];
const age1 = calcAge(year[0]);
const age2 = calcAge(year[1]);
const age3 = calcAge(year[year.length - 1]);
console.log(age1, age2, age3);

const ager = [calcAge(year[0]), calcAge(year[1]), calcAge(year[year.length - 1])] 
console.log(ager);
