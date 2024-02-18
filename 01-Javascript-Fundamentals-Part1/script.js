/*
// FIRST PROGRAM
// console.log('Hello World!');
*******************************************************

// VARIABLES:-
firstName = "Hasnain";
lastName = "Khan";
console.log(firstName, lastName);
*******************************************************

// DATA TYPES:-
javascriptIsFun = true;
age = 18;
pi = 3.1415;
message = 'Welcome';
x = null;
y = undefined;
console.log(javascriptIsFun, age, pi, message, x, y);
*******************************************************

// VAR, LET, CONST:-
let age = 18; can be reassigned or changed(mutate).
age = 19;
const birthyear = 2002; cannot be changed or reassigned(immutate).
var currentYear = 2022;
*******************************************************

// OPERATORS:-
console.log(4 + 4);
console.log(4 - 2);
// console.log(4 * 4); Precedence => (), /, *, +, - 
console.log(4 / 4);
console.log(4 ** 4);
console.log(3 > 5);
console.log(3 < 5);
console.log(3 >= 5);
console.log(3 <= 5);
console.log(3 != 5);
*******************************************************

// CODING CHALLENGE:-
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
console.log("Mark BMI is " + markBMI);
console.log("Mark BMI is" + johnBMI);
const markHigherBMI = markBMI > johnBMI;
if(markHigherBMI) {
    console.log('Mark BMI is higher than John.')
}else {
    console.log('John BMI is higher than Mark.')
}
*******************************************************

// TEMPLATE LITERALS:-
let firstName = "Hasnain";
let age = 2022 - 2002;
let job = "Student";
console.log(`I'm ${firstName}, a ${age} year old ${job}.`);
console.log(`This
is a
multiline string.`); 
*******************************************************

// CONDITIONAL STATEMENT:-
let age = 18;
if (age > 18) {
    console.log('You can vote.');
}else if (age == 18) {
    console.log('You can vote.');
}else {
    console.log('You cannot vote.');
}
*******************************************************

// TYPE CONVERSION:-    
let x = '2';
console.log(x + 2);
console.log(Number(x) + 2); convert it to number.
console.log(String(2)); convert it to string.
*******************************************************

// TYPE COERCION:-
console.log(2 + '4'); + => convert it into string
console.log(2 - '4'); - => convert it to number
console.log(2 * '4'); * => convert it to number
console.log(2 / '4'); / => convert it to number
*******************************************************

// TRUTHY AND FALSY VALUE:-
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(NaN));
// These all are false rest of that are true.
*******************************************************

// EQUALITY OPERATORS:-
const age = 18;
if (age == 18) console.log('You are 18 years old (loose)'); // loose equality
if (age == '18') console.log('You are 18 years old (loose)'); // loose equality
if (age === 18) console.log('You are 18 years old (strict)'); // strict equality
if (age === '18') console.log('You are 18 years old (strict)'); // strict equality
if (age != 18) console.log('You are not 18 years old (loose)'); // loose inequality
if (age !== 18) console.log('You are not 18 years old (strict)'); // strict inequality
*******************************************************

// BOOLEAN LOGIC:-
const isDriverLicense = true;
const isTired = false;
console.log(isDriverLicense && isTired);
console.log(isDriverLicense || isTired);
console.log(isDriverLicense && !isTired);
*******************************************************

// CODING CHALLENGE:-
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);
if (scoreDolphins > scoreKoalas && scoreDolphins > 100) {
    console.log('Dolphins win the trophy 🏆');
}else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100){
    console.log('Koalas win the trophy 🏆');
}
else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100){
    console.log('Draw');
}else {
    console.log('No one win the trophy!');
}
*******************************************************

// SWITCH STATEMENT:-
day = 'wednesday';
switch (day) {
    case 'monday':
        console.log('Today is monday');
    break;
    case 'tuesday':
        console.log('Today is tuesday');
    break;
    case 'wednesday':
        console.log('Today is wednesday');
    break;
    default:
        console.log('Invalid');    
}
*******************************************************

// EXPRESSION ---> Anything that produce a value.
// STATEMENT ---> Anything that produce not produce a value, terminated with a semicolon.
*******************************************************

// TERNARY OPERATOR:-
const age = 19;
const vote = age >= 18 ? 'You can Vote' : 'You cannot Vote';
console.log(vote);
*******************************************************

// CODING CHALLENGE:-
bill = 275;
tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * .2;
console.log(`The bill was ${bill}, and the tip was ${tip}, and the total value is ${bill + tip}`);
*/
