// console.log('Hello World!');

// var name = 'Alex';
// console.log(name);

// var schoolTeam = 'basketball';
// var schoolNumber = 20;
// console.log(schoolNumber);


// var isRegistered = true;
// console.log(isRegistered);

// var job;
// console.log(job);

// job = 'student';
// console.log(job);

// console.log(name + ' ' + schoolNumber);

// var schoolName, hasCourse;

// schoolName = 'OAKAcademy';
// hasCourse = true;

// console.log(schoolName + ' has 35 courses. Does it have any curse? ' + hasCourse);

// schoolNumber = 'twenty two';
// console.log(schoolNumber);

// schoolTeam = 'Tennis';
// console.log(schoolTeam);

// alert(schoolTeam);

// var age = prompt('How old is he?');
// console.log('Alex is ' + age + ' years old.');


////////// BASIC OPERATORS //////////
// var totalDistance, distanceAlex, distanceSam;
// totalDistance = 20;

// distanceAlex = totalDistance - 12;
// console.log(distanceAlex);
// distanceSam = totalDistance - 7;
// console.log(distanceSam * 2);
// console.log(distanceSam / 2);


// Logical Operators
// var distanceToSchool, distanceToHome;

// distanceToHome = 14;
// distanceToSchool = 6;

// var isCloser = distanceToHome < distanceToSchool;
// console.log(isCloser);


// Boolean Logic
// var isLoggedIn = true;


// Conditional Statements

// var grade, age;
// grade = 50;
// age = 23;

// if(grade < 40) {
//     console.log('You can not go to next class.');
// } else if(grade >= 40 && grade < 45) {
//     console.log('You can not go to next class but you can enter exam');
// }
// else {
//     console.log('You can go to next class');
// }

// if(age < 18) {
//     console.log('Cannot enter the cafe');
// } else if(age < 23) {
//     console.log('Can enter the cafe but cannot drink alcohol');
// }
// else {
//     console.log('Can enter the cafe and drink alcohol');
// }


// Ternary Operator

// var grade = 42;

// grade < 45 ? console.log('You cannot go to the next class') : console.log('You can go to next class');

// var result = grade < 45 ? 'Failure' : 'Success';

// console.log(result);


// Switch Statements

// var day;
// day = 'monday';

// switch (day) {
//     case 'saturday':
//         console.log('I like saturday');
//         break;
    
//     case 'monday':
//         console.log('I do not like monday');
//         break;

//     case 'friday':
//         console.log('I really like friday');
//         break;

//     default:
//         console.log('I do not know the day');
// }


// var grade = 38;

// switch(true) {
//     case (grade < 40):
//         console.log('You can not go to next class');
//         break;

//     case (grade >= 40 && grade < 45):
//         console.log('You can not go to next class but you can enter exam');
//         break;

//     default:
//         console.log('You can go to next class');
//         break;
// }

// var averageAlex, averageSara, averageNancy;

// averageAlex = (90 + 80 + 95) / 3;
// averageSara = (89 + 76 + 98) / 3;
// averageNancy = (42 + 98 + 83) / 3;

// if(averageAlex > averageSara && averageAlex > averageNancy){
//     console.log('Alex')
// }
// else if(averageSara > averageAlex && averageSara > averageNancy){
//     console.log('Sara');
// }
// else if(averageNancy > averageAlex && averageNancy > averageSara){
//     console.log('Nancy');
// }
// else{
//     console.log('There is a draw');
// }


// LOOPS

// var number = 25;

// while(number < 149) {
//     if(number <= 100 && number % 7 === 0){
//         console.log(number);
//     }
//     else if((132 <= number <= 148) && (number % 2 === 0)) {
//         console.log(number)
//     }
//     number++;
// }


// for(var i = 25; i <= 148; i++) {
//     if(i <= 100 && i % 7 === 0){
//         console.log(i);
//     }
//     else if((132 <= i <= 148) && (i % 2 === 0)) {
//         console.log(i)
//     }
// }


// FUNCTIONS

// function sayHello() {
//     console.log('Hello World');
// }

// sayHello();

// function doSomething() {
//     console.log('Hello World');
//     console.log('Goodbye World');
//     console.log('How are you?');
// }

// doSomething();
// doSomething();
// doSomething();
// doSomething();

// function sayHi(name) {
//     console.log('Hi ' + name)
// }

// sayHi('Sara');
// sayHi('John');

// function cube(number) {
//     console.log(number * number * number)
// }

// cube(3)
// cube(79)

// function bmi(length, weight) {
//     console.log(weight / (length * length))
// }

// bmi(1.80, 85)

// function calculateAge(birthYear) {
//     return 2020 - birthYear;
// }

// var age = calculateAge(1992);

// console.log('This is the age', age)

// function enterCafe(age) {
//     if(age < 18) {
//         return 'You can not enter cafe'
//     }
//     return 'You can enter cafe'
// }

// var cafe = enterCafe(17)

// console.log(cafe)


// Arrays

// var students = ['Sheldon', 'Leonard', 'Penny', 'Raj'];

// console.log(students);
// console.log(students[0]);

// students[0] = 'Amy';
// console.log(students);

// students[4] = 'Howard';
// console.log(students);

// students[7] = 'John';
// console.log(students);

// var cats = [];
// var cats = new Array();

// var commonData = ['John', 25, true, null];

// var student_length = students.length;
// console.log(student_length);

// Array methods:

//push method adds a new item to the end of an array
// students.push('Miguel');

//pop method removes the last item from array
// var lastStudent = students.pop();
// console.log(lastStudent);

//unshift adds new item to the beginning of the array
// var cats = ['cat1', 'cat2', 'cat3'];
// cats.unshift('cat4');
// console.log(cats);

//shift method removes item from beginning
// cats.shift();
// console.log(cats);

//index of
// console.log(students.indexOf('Sheldon'));

//slice
// var friends = ['Ross', 'Rachel', 'Joey', 'Chandler'];
// var closeFriends = friends.slice(1, 3);
// console.log(friends);
// console.log(closeFriends);

// var books = ['Harry Potter', 'Hobbit', 'Hunger Games', 'Little Prince'];

// for(var i = 0; i < books.length; i++) {
//     console.log(books[i]);
// }

// books.forEach(function(book) {
//     console.log(book);
// })