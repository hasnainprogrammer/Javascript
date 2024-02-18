/* 
// STRICT MODE:-
'use strict';
hasDriversLicense = false;
passTest = true;
if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('You can drive :)');

let interface = 23;
let private = 10; // give an error and saying the reserved words cannot be used, in future these words can be reserved.
*******************************************************

// FUNCTION:-
function greet() {
    console.log('Hello Function!');
}
// calling, running, invoking the function
greet();

// Returning a value from a function
function sum(n1, n2) {
    return n1 + n2;
}
let result = sum(10, 15);
console.log(`n1 + n2 = ${result}`);

// Function declaration
function calcAge1(birthYear) {
    return 2022 - birthYear;
}
console.log(calcAge1(2002));

// Function expression, also called anonymous function
const calcAge2 = function(birthYear) {
    return 2022 - birthYear;
}
const output = calcAge2(2002);
console.log(output);

// Arrow Function
const calcAge3 = birthYear => 2022 - birthYear;
console.log(calcAge3(2002));
const yearsUntillRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${firstName} has ${retirement} years left in retirement`;
}
console.log(yearsUntillRetirement(1980, 'Jonas'));
function cutFruitPieces(fruit) {
    return fruit * 4;
}
// Calling a function inside another function
function juice(apple, oranges) {
    const applePieces = cutFruitPieces(apple);
    const orangePieces = cutFruitPieces(oranges);
    return `Making juice of ${apple} apples with ${applePieces} pieces and ${oranges} oranges with ${orangePieces} pieces`;
}
console.log(juice(2, 3));

// CODING CHALLENGE:-
const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas= calcAverage(23, 34, 27);
console.log(`Dolphins = ${scoreDolphins}, Koalas = ${scoreKoalas}`);
function chechWinner(scoreDolphins, scoreKoalas) {
    if (scoreDolphins >= 2 * scoreKoalas) {
        console.log(`Dolphin win (${scoreDolphins} vs ${scoreKoalas})`);
    } else if (scoreKoalas >= 2 * scoreDolphins) {
        console.log(`Koalas win (${scoreKoalas} vs ${scoreDolphins})`);
    } else {
        console.log('No one wins...');
    } 
}

chechWinner(scoreDolphins, scoreKoalas);
*******************************************************

// ARRAYS:-
const friends = ['babar', 'shaheen', 'shadab'];
friends[3] = 'rizwan';
friends[1] = 'haris';
console.log(friends);
console.log(friends[0]);
console.log(friends.length);
const babar = new Array('babar azam', 56, 50.5, 2022 - 1995, friends);
console.log(babar);

// Array Methods 
const friends = ['babar', 'shaheen', 'shadab'];
friends.push('imam');
friends.unshift('haris');
friends.pop();
friends.shift();    
console.log(friends.indexOf('shaheen'));
console.log(friends.includes('shadab'));
console.log(friends);
if (friends.includes('shadab')) {
    console.log('You have a friend called shadab');
}

// CODING CHALLENGE:- 
const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);
*******************************************************

// OBJECTS:-
const babar = {
    firstName: 'Babar',
    lastName: 'Azam',
    shirtNo: 56,
    friends: ['shadab', 'rizwan', 'imam'] 
};
console.log(babar);
console.log(babar.firstName);
console.log(babar['lastName']);
// DOT -> To retrieve data property name must be same otherwise give error.
//                  VS 
//BRACKET -> property name can be calculated using an expression.
babar.nationality = 'pakistani';
babar['city'] = 'lahore';
console.log(babar);
babar.friends[2] = 'shaheen';
console.log(babar);
const babar = {
    firstName: 'Babar',
    lastName: 'Azam',
    shirtNo: 56,
    birthYear: 1995,
    friends: ['shadab', 'rizwan', 'imam'],
    message: function() {
        console.log('Hello Everyone!');
    },
    calcAge: function() {
        return 2022 - babar.birthYear;
    },
    getSummary: function() {
        return `${this.firstName} is a pakistani ${this.calcAge()} years old star player,his shirt no is ${this.shirtNo} and his best friend is ${this.friends[0]}.`
    }
};      
console.log(babar.message());
console.log(babar.calcAge());
console.log(babar.getSummary());

// CODING CHALLENGE:-
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};
if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})`);
} else {
    console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})`);
}
*******************************************************

// LOOPS:-
// For Loop
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lipting weight repition🏋️‍♂️ ${rep}`);
}
// Looping through array
babar = ['babar', 56, 50.5, ['imam', 'shadab', 'rizwan']];
for (let i = 0; i < babar.length; i++) {
    console.log(babar[i], typeof(babar[i])); 
    if (babar[i] === 56) {
        break;
    }  
    if (typeof(babar[i]) !== 'string') continue;
    console.log(babar[i]); 
}
years = [1991, 1995, 1999, 2002];
ages = [];
for (let i = 0; i < years.length; i++) {
    ages[i] = 2022 - years[i];
    ages.push(2022 - years[i]);       
}
console.log(ages);

Loop through an array in Reverse order
babar = ['babar', 56, 50.5, ['imam', 'shadab', 'rizwan']];
for (let i = babar.length - 1; i >= 0; i--) {
    console.log(i, babar[i]);
}

// Nested Loop:
for (let i = 1; i < 3; i++) {
    console.log(`------- Exerice ${i}`)
    for (let j = 1; j < 6; j++) {
    console.log(`Exerice ${i} Weight lifting repetition ${j}`);
    }
}

// While loop
let i = 1;
while (i < 6) {
    console.log(i);
    i++;
}

// CODING CHALLENGE:-
const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
}
let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]; 
let tips = [];
let totals = [];

for (let i = 0; i < bills.length; i++) {
    let tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

// Bonus Challenge
let sum = 0;
const calcAvg = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAvg([7, 2, 3]))
*/
