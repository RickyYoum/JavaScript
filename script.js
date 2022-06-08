'use strict';

/* 
const calcAge2 = function (birthYear){
    return 2037- birthYear;
}

const calcAge3 = birthYear => 2036 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearsUntilRetirement(1991));

*/

/*

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}
fruitProcessor(2,3);

*/

/*
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) return retirement;

    else return -1;
    
    // return `$(firstName) retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1970, 'Mike'));
*/

// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so 
// one average score per team).
// A team only wins if it has at least double the average score of the other team. 
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team 
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
// to the console, together with the victory points, according to the rule above. 
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B. 
// Apply this to the team's average scores �

/*
const calcAverage = (score1, score2, score3) => {
    return (score1+score2+score3)/3;
}

const checkWinner = function(avgDolhins,avgKoalas){
    if (avgDolhins >= avgKoalas * 2){
        console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`);
    }
    else if (avgDolhins *2 <= avgKoalas){
        console.log(`Koalas win(${avgKoalas} vs. ${avgDolhins})`);
    }
    else{
        console.log("No team wins.");
    }
}
checkWinner(calcAverage(85,54,41), calcAverage(23,34,27));
*/


/*

Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns 
the corresponding tip, calculated based on the rules above (you can check out 
the code from first tip calculator challenge if you need to). Use the function 
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data 
below
3. Create an array 'tips' containing the tip value for each bill, calculated from 
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can 
actually be the returned value of a function! So you can just call a function as array 
values (so don't store the tip values in separate variables first, but right in the new 
array) 

*/

// const calcTip = function(bill){
//     if (bill >= 50 && bill <= 300){
//         return bill*0.15;
//     }
//     else{
//         return bill*0.2;
//     }
// }

// const bills = new Array(125, 555, 44);
// const tips = new Array(calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2]));
// const total = new Array(bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]);
// console.log(`Bills: ${bills}. Tips: ${tips}. Total: ${total}`);


/*
const ben = {
    firstName: 'Ben',
    lastName: 'Lee',
    age: 1996,
    job: 'jobless',
    friends: ['Kimu', 'Wingdoo', 'Choopapi']
};

const interest = prompt('What do you want to know about Ben? Choose between firstName, lastName, age, job or friends');

if (ben[interest]){
    console.log(ben[interest]);
}
else{
    console.log('Wrong request! Choose between firstName, lastName, age, job or friends');
}

*/


// const ben = {
//     firstName: 'Ben',
//     lastName: 'Lee',
//     age: 1996,
//     job: 'jobless',
//     friends: ['Kimu', 'Wingdoo', 'Choopapi'],
//     hasDriversLicense: true,

//     calcAge: function(birthYear){
//         return 2022-birthYear;
//     },

//     getSummary: function(){
//         return `Ben is a ${this.calcAge(this.age)}-year old ${this.job} man, and he has ${this.hasDriversLicense ? 'a': 'no'} driver's license`;
//     }
// };

// console.log(ben.getSummary());


/*

Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
implement the calculations! Remember: BMI = mass / height ** 2 = mass 
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and 
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
method on both objects). Store the BMI value to a property, and also return it 
from the method
3. Log to the console who has the higher BMI, together with the full name and the 
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
tall

*/


// const mark = {

//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function(){
//         this.bmi = this.mass / this.height ** 2
//         return this.bmi;
//     }
// };

// const john = {

//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function(){
//         this.bmi = this.mass / this.height ** 2
//         return this.bmi;
//     }
// };

// mark.calcBMI();
// john.calcBMI();


// console.log(`${mark.fullName}'s BMI (${mark.bmi}) is ${mark.bmi > john.bmi ? 'higher' : 'lower'} than John's (${john.bmi})!`);


// for (let i = 1; i <= 10; i++){
//     console.log(`Counting: ${i}`);
// }
const arr = new Array();
console.log(arr);