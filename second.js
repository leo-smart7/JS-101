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
const age2 = function (birthYear) {
    return 2030 - birthYear;
}
const calcAge2 = age2(2005);
console.log(calcAge2, crrtAge1);

// Arrow Functions
const age4 = birthYear => 2030 - birthYear;
const age5 = age4(2006);
console.log(age5);

const yearsUntilRetirement = birthYear => {
    const age = 2027 - birthYear;
    const retirement = 75 - age;
    return retirement;
}
console.log(yearsUntilRetirement(1982))