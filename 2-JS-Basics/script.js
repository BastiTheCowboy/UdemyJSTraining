

//variables lecture 
/*
console.log('Hello World!')
var name = 'Corinne';
console.log (name);
var lastName = 'Schikora';
console.log (lastName);
var age = 5;
console.log (age); 
var fullAge = false;
console.log (fullAge);
*/

// lecture variable 2

/*var name = 'Corinne';
var age = 5;
console.log (name + age);
console.log (age + age);

var job, isMarried;
console.log (job);
job = "student";
isMarried = false;

console.log (name + ' ' + age + ' ' + job + ' ' + isMarried);

// var lastName = prompt ("What is the last Name?");
// console.log ("Last Name:" + lastName);

alert (name + ' ' + age + ' ' + job + ' ' + isMarried)

*/

//Operators
/*
var birthYear = 2017 - 5

console.log (birthYear);
birthYear++;
console.log (birthYear);
birthYear*=2;
console.log (birthYear);

*/

// If / Else statements

/*var name = 'John';
var age = 26;
var isMarried = 'No';

if (isMarried === 'Yes') {
	console.log (name + ' is married');
} else {
	console.log (name + ' needs to find someone');
}
*/

/*
var bobHeight = 285;
var bobAge = 47;
var johnHeight = 205;
var johnAge = 63;
var johnScore = johnHeight + 5 * johnAge;
var bobScore = bobHeight + 5 * bobAge;
var jimHeight = 160;
var jimAge = 64;
var jimScore = jimHeight + 5 * jimAge;

if ((johnScore > bobScore) && (johnScore > jimScore)) {
	console.log ( "John is the winner! His score is : " + johnScore );
} else if ((bobScore > johnScore) && (bobScore > jimScore)) {
	console.log ( "Bob is the winner! His score is : " + bobScore );
} else if ((jimScore > johnScore) && (jimScore > bobScore)) {
	console.log ( "Jim is the winner! His score is : " + jimScore );
} else {
	console.log ("It\'s a draw ...");
} 

*/

/*
var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

// for loops
for (var i = 0; i < names.length; i++) {
    console.log(names[4-i]);
}
*/

//Coding challenge 2

function printFullAge (birthYears) {
	var ages = [];
	for (var i = 0; i < birthYears.length; i++) {
		ages.push(2017-birthYears[i]);
	}
	console.log (ages)
	var isFullAge = [];
	for (var i = 0; i < birthYears.length; i++) {
		console.log('Age: ' + ages[i] + ' is volljaehrig: ' + Boolean(ages[i]>=18));
		isFullAge.push(Boolean(ages[i]>=18));
	}
	return isFullAge;

}
var birthYearOne = [1965, 2008, 1992];
var return1 = printFullAge(birthYearOne);
console.log(return1);
var birthYearTwo = [2013, 2008, 1926];
var return2 = printFullAge(birthYearTwo);
console.log(return2);

