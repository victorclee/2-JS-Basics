// lecture: variables
/*
var name='John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

// lecture: variable 2

// var name = 'John';
// var age = 26;

// console.log(name + age);
// console.log(age + age);

// var job, isMarried;

// console.log(job);

// job = 'teacher';
// isMarried = false;

// console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried+ '.');



// age = 'thirty six';
// job = 'driver';

// console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried+ '.');


// var lastName = prompt('What is the last name?');
// console.log(lastName);

// alert(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried+ '.');

// lecture: operators
// var now = 2017;
// var birthYear = now - 26;

// birthYear = now - 26 * 2
// 2017 - 52
// 1965

// console.log(birthYear);

// var ageJohn = 30;
// var ageMark = 30;

// ageJohn = ageMark = (3 + 5) * 4 - 6;
// ageJohn = ageMark = 26
// ageJohn = 26
// ageJohn++;
// ageMark *= 2;
// console.log(ageJohn);
// console.log(ageMark);

///////////////////////////////////////////
// lecture: if/else statements

// var name = 'John';
// var age = 26;
// var isMarried = 'yes';

// if (isMarried === 'yes') {
//   console.log(name + ' is married!');
// } else {
//   console.log(name + ' will hopefully marry soon :)');
// }
/*
isMarried = false;
if(isMarried) {
  console.log('YES!');
} else {
  console.log('NO');
}
*/
// isMarried = false;
// if(isMarried) {
//   console.log('YES!');
// }
// double equal in JavaScript does type coercion
// if(23 == '23') {
//   console.log('something for you to print');
// }


/////////////////////////////////
// lecture: boolean logic and switch

/*
var age = 20;
if (age < 20) {
  console.log("John is a teenager");
} else if (age >= 20 && age  < 30) {
  console.log('John is a young man');
} else {
  console.log('John is a man');
}
*/
/*
var job = 'teacher';

job = prompt('What does John do?');

switch (job) {
  case 'teacher':
    console.log('John teaches kids');
    break;
  case 'driver':
    console.log('John drives a cab in Chicago')
    break;
  case 'cop':
    console.log('John fights crime');
    break;
  default:
    console.log('John is a Joe');
}
*/

/////////////////////////////
// Lecture: Functions

function calculateAge(yearOfBirth) {
  var age = 2017 - yearOfBirth;
  return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);


function yearsUntilRetirement(name, year) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  if(retirement >= 0) {
    console.log(name + ' retires in ' + retirement + ' years.');
  } else {
    console.log(name + ' has already retired.');
  }
}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);






































































