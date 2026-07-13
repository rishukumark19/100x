console.log("Hello via Bun!");
function greet(firstName: string) {
  console.log("Hello " + firstName);
}
greet("Bun");

function sum(a: number, b: number) {
  return a + b;
}
console.log(sum(1, 2));
let x = 1;
let y = 2;
console.log(sum(x, y));

//write a function first_element that takes an array  as input ,
// and returns the first element if it exists.
//if it doesnt exist return null.

function first_element(arr: number[]) {
  if (arr.length > 0) {
    return arr[0];
  } else {
    return null;
  }
}
let result1 = first_element([]);
first_element([1, 2, 3]);
