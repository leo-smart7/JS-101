'use strict';
// Function
/*function logger() {
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
    } else {
        console.log(`It's a tie!`)
    }
}

checkWinner(scoreDolphines, scoreKoalas);
checkWinner(110, 300)

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
    return 2037 - birthYear;
}

const year = [1990, 1967, 2002, 201, 2018];
const age1 = calcAge(year[0]);
const age2 = calcAge(year[1]);
const age3 = calcAge(year[year.length - 1]);
console.log(age1, age2, age3);

const ager = [calcAge(year[0]), calcAge(year[1]), calcAge(year[year.length - 1])]
console.log(ager);

const friend = ['Micheal', 'James', 'Anthony'];
friend.push('Jonathan');
console.log(friend);
friend.unshift('Kai');
console.log(friend);
friend.pop();
console.log(friend)

// Coding challenge #2
const calcTip = function (bill) {
    let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    return tip;
}
// console.log(calcTip(100));
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(bills, tips, total);

// Objects
const leoArray = [
    'Leonard',
    'Nwagu',
    2026 - 2003,
    ['Matthew', 'Mark', 'Luke']
]

const nwaObj = {
    firstName: 'Leonard',
    lastName: 'Nwagu',
    age: 2026 - 2003,
    friends: ['Matthew', 'Mark', 'Luke']
};

console.log(nwaObj);
console.log(nwaObj.firstName);
console.log(nwaObj.lastName);

console.log(nwaObj.lastName); // Personally I prefer this method, it's more easier to use 
console.log(nwaObj['firstName']); // Here you can put any expression you like

const nameKey = 'Name';
console.log(nwaObj['first' + nameKey]);
console.log(nwaObj['last' + nameKey]);

// const interestedIn = prompt(`What do you want to know about leo? choose between firstName, Lastname, Age, Friends?`);
// console.log(nwaObj[interestedIn]);

// if (nwaObj[interestedIn]) {
//     console.log(nwaObj[interestedIn]);
// } else {
//     console.log("This data doesn't exist!")
// }

nwaObj.location = 'Owerri, Imo state';
nwaObj.twitter = '@Leo_Codes';
console.log(nwaObj);

console.log (`${nwaObj.firstName} has ${nwaObj.friends.length}, but he's best friend is ${nwaObj.friends[0]}`);*/

// Object Method
/*const nwaObj = {
    firstName: 'Leonard',
    lastName: 'Nwagu',
    birthYear: 2003,
    friends: ['Matthew', 'Mark', 'Luke'],
    hasDriversLicence: true,

    // calcAge: function (birthYear) {
    //     return 2030 - birthYear;
    // }

    // calcAge: function () {
    //     // console.log(this)
    //     return 2030 - this.birthYear;
    // } 

    calcAge: function () {
        this.age = 2030 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
      return `${this.firstName} is a ${this.calcAge()} years old ${this.job} and he has ${this.hasDriversLicence ? 'a' : 'no'} driver's license` 
    }

};

nwaObj.job = `Teacher`;
console.log(nwaObj);

// console.log(nwaObj.calcAge());

// console.log(nwaObj.age);
// console.log(nwaObj.age);
// console.log(nwaObj.age);

// console.log(nwaObj['calcAge'](2003));
console.log(nwaObj.getSummary());*/

// Coding challenge #3
/*const markBMI = {
    markFullName: 'Mark Miller',
    markBodyWeight: 78,
    height: 1.69,

    calcBMI: function () {
        this.bodyWeight = this.markBodyWeight / (this.height * this.height);
        return this.bodyWeight;
    }
};

const johnBMI = {
    johnFullName: 'John Smith',
    johnBodyWeight: 92,
    height: 1.97,

    calcBMI: function () {
        this.bodyWeight = this.johnBodyWeight / (this.height * this.height);
        return this.bodyWeight;
    }
};

console.log(markBMI.calcBMI());
console.log(johnBMI.calcBMI());

console.log(`${markBMI.markFullName} BMI (${Math.round(markBMI.bodyWeight)}), is higher that John's (${Math.round(johnBMI.bodyWeight)})!`);*/

// Iteration The For Loop
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋`);
// }

const leoArray = [
    'Leonard',
    'Nwagu',
    2026 - 2003,
    'teacher',
    true
    ['Matthew', 'Mark', 'Luke']
]

for (let i = 0; i < leoArray.length; i++) {
    console.log(leoArray[i]);
}