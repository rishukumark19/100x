/*
Create a variable for each of the following: your favorite color, your height in centimeters, and whether you like pizza. 
Use appropriate variable declarations (let, const, or var). Try logging it using console.log
*/

let color = "blue";
let height = 178;
let pizza = true;

console.log(color, height, pizza);

/*
Write a function sum that finds the sum of two numbers. 
Side quest - Try passing in a string instead of a number and see what happens?
 */
function sumup(number1, number2) {
  return number1 + number2;
}
console.log(sumup(1, 2));
console.log(sumup("apple", 2));
/*
Write a function called canVote that returns true or false if the age of a user is > 18
 */
function canvote(your_age) {
  if (your_age >= 18) {
    return "you can vote";
  } else {
    return "No you cannot ";
  }
}
console.log(canvote(32));

/*
Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd."
 */
function checkOddEven(checkEven) {
  if (checkEven % 2 == 0) {
    return "The number is even.";
  } else {
    return "The number is odd.";
  }
}
console.log(checkOddEven(122));
/*
Write a function called sum that finds the sum from 1 to a number */
function sum(n) {
  return (n * (n + 1)) / 2;
}
console.log(sum(3));

// COMPETX TYPE
//  - Objects (key value stores) and Arrays   and arrays of object and objects of objects.

/*
Write a function that takes a user as an input and greets them with their name and age. also tell if they are legal to vote or not .
 */
let user = {
  name: "Rishu",
  age: 23,
};
function greetings(name, age) {
  if (age > 18) {
    return name + " .how u doing . are u " + age + " years old?. You can vote";
  } else {
    return (
      name +
      " .how u doing . are u " +
      age +
      " years old?. you are not allowd to vote"
    );
  }
}
console.log(greetings(user.name, user.age));

/*
Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS
 */

//option -1
arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function evenNumbers(arrayOfNumbers) {
  for (i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] % 2 == 0) {
      console.log(arrayOfNumbers[i]);
    }
  }
}
evenNumbers(arrayOfNumbers);

//option-2
function evenNumbers1(arr) {
  let arrReturn = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      arrReturn.push(arr[i]);
    }
  }
  return arrReturn;
}
console.log(evenNumbers1(arrayOfNumbers));

// option -3 filters
function evenNumbers2(arr) {
  return arr.filter((num) => num % 2 == 0);
}
console.log(evenNumbers2(arrayOfNumbers));

/*
Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old
 */

const usersArray = [
  {
    name: "Harkirat",
    age: 21,
    gender: female,
  },
  {
    name: "raman",
    age: 22,
    gender: male,
  },
];
// option 1
function filterUsers(usersArray) {
  newArray = [];
  for (i = 0; i < usersArray.length; i++) {
    if (usersArray[i].age > 18) {
      newArray.push(usersArray[i]);
    }
  }
  return newArray;
}
console.log(filterUsers(usersArray));

// option 2
function filterUsers2(usersArray) {
  return usersArray.filter(function (user) {
    return user.age > 18;
  });
}
console.log(filterUsers2(usersArray));

/*
Create a function that takes an array of objects as input,
and returns the users whose age > 18 and are male
 */

const usersArray = [
  { name: "Harkirat", age: 21, gender: "male" },
  { name: "Raman", age: 22, gender: "male" },
  { name: "Simran", age: 19, gender: "female" },
  { name: "Ajay", age: 16, gender: "male" },
];

const filterUsers = (arr) => {
  return arr.filter((user) => {
    return user.age > 18 && user.gender === "male";
  });
};

console.log(filterUsers(usersArray));
// Output: [{ name: "Harkirat", age: 21, gender: "male" }, { name: "Raman", age: 22, gender: "male" }]
