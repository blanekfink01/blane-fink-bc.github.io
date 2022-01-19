/*
 * DATATYPES:
 *
 * 0. In the heart of every computer program is data manipulation. Data can take many forms, and so,
 * in JavaScript, there are many datatypes that have different use cases and different ways to manipulate them
 */

// 1. Number //

// In JavaScript you can write and add normal numbers together using arithmetic operators. They are as dynamic as real numbers!
const num1 = 634265.364;
const num2 = -344.2435416;
const num3 = num1 / num2; // => -1842.4902354072224

// 2. String //

/* strings are a datatype meant for plain text. You can access each character
* separately like the following code
*/
let stringg = 'You owe me $30!';
console.log(stringg[11]) // => '$'

// there are also numerous methods that you can use to manipulate strings like so
let stringgg = 'You owe' + ' me $30!'; // the "+" operator will stitch strings together similarly to how it adds numbers


// 3. Boolean //
/**
 * booleans are two sepcial pieces of data which are "true" and "false"
 * these are what will tell you using comparison operators what is or isnt true in your code
 */
// Whenever a comparison operator is used to compare two values a boolean is always the result
console.log(5 > 2); // this comparison resolves to a boolean of true
console.log(5 > 5); // this comparison is logically false, so it resolves to a false boolean


// 4. Array //
/**
 * arrays are the lists of our code. an array is a complex datatype meaning it has an infinite maximum size
 * and they are used to store values in a 0-indexed list of values that can each be accessed instantly
 * using bracket notation, similarly to strings. they also have a multitude of methods for manipulating
 * the values or getting a new array of values based on an input array
 */
// accessing
let myArray = [1,2,3]; 
console.log(myArray[1]); // => 2 // note that 1 pulls the second value from the array becaue arrays start at 0
// all arrays have built in methods and a length property
console.log(myArray.length); // => returns a length of 3
// here is an example of the array.map function
let myArray2 = myArray.map(value => value + 1);
console.log(myArray2); 
// this logs [2,3,4] because map takes in a function that can take in each element of the array, its index,
// and the array and the return will be the new value in the same place in a returned array


// 5. Object //
/**
 * Objects
 */

// Function
// undefined
// null
// NaN
// Infinity and -Infinity (Google them if you don't know!)
// What is the difference between primitive/simple and complex data types?
// Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. What does that mean, and how are they different?
