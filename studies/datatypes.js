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
 * Objects are complex datatypes that store values under names called keys instead of simply
 * being an ordered list
 */
// theyre made literally like this
let object = {
    'name': 'blane',
    'lastName': 'blan'
};
// they let you access your values like this
let name = object['name']; // => 'blane' // note: you can use variables representing a key in the brackets
let lastName = object.name // => 'blan' // dot notation takes every character after it as a string literal

// 6. Function //
/**
 * Programs will almsot always require custom code that performs certain tasks to achieve the program's goals
 * but many different aspects of the program will need to use the exact same code to do different tasks.
 * Functions are the solution to that problem! A function will run whatever code you put in it when you call it.
 * It will use values you pass in, and return whatever value you tell it to
 */
function print(string1, string2) {// function creates a function. print is the name to call the function
    console.log(string1 + string2);
    return string1 + string2;
}
print('i like', 'some dogs') // here are function arguments. they will respectively take the place of
// string1 and string2 in a new instance of the print function. it will log'i likesome dogs' and then return that value

// 7. undefined //
/**
 * undefined is a value that is used as a placeholder for a value when a new named variable is created before it
 * gets assigned one. It can be created by using the undefined keyword.
 */
var mike;
console.log(mike); // undefined
console.log(undefined) // undefined
console.log([1,2,3][5]) // literally an undefined value that would return undefined if attempted to access

// 8. null //
/**
 * null is like undefined in the way that it always equals itself and nothing else, but null
 * represents a lack of value, unlike undefined it is not a natural datatype. It must be assigned
 */
let myArr = [null, 4];
myArr[0] = 3; // myArr equals [3, 4] 
// null just acts like a placeholder. what can I say?

// 9. NaN //
/**
 * NaN stands for NaN and is used as a sort of warning because it can be the result of some JavaScript math that
 * didn't go well
 */
// Number cannot be parsed
Number(undefined); // => Nan
NaN + 5 // => NaN
'haha' + 12 // => NaN

// 10. Infinity // 
/**
 * infinity is the same mathematical infinity in real life and simulates as many properties as possible
 * of infinity without actually using an infinite amount of something
 */
// infinity is more than the largest number in javascript
let almostBiggestNum = 900719925474099;
console.log(almostBiggestNum > infinity); // => false
// there is also negative infinity which is the same as infinity but negative
-almostBiggestNum > -infinity // => true

// 11. What is the difference between primitive/simple and complex data types? //
/**
 * Simple datatypes have a max size based on simple hardware limitations. They are also always
 * one single value. Complex datatypes include objects and arrays. They can hold many  simple and complex datatypes within
 * themselves, and they have an infinite size because they can span as many bites as there is memory on the pc, unlike simple data
 */
// 12. Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. What does that mean, and how are they different?
/**
 * An important note on primitive vs complex data is that simple datatypes are copied by value meaning that if you referenced
 * a variable holding the value it creates a copy of the value to be store. With complex datatypes that could double a program's
 * memory requirement so instead of copying complex datatypes, JavaScript stores them in a random spot in memory, and variables
 * "containing" complex data actually only contains a simple reference to the location of the complex data
 */

// copy by val:
let a = 4;
let b = a;
a = 47;
console.log(a, b); // => logs 47 then 4
// since b has a copy of what a once was and is not referencing a's value, b retains a's old value
// if this was copy by reference, both a and b would point to the same value and a or b would
// change if the value was changed to either of them

// here is an example of this using arrays
let arr1 = ['ok', 'hi', 6, null, undefined];
let arr2 = arr1;
arr1 = arr1.slice(2);
console.log(arr1, arr2); // both logs [6, null, undefined]
arr2[1] = 'not null!';
console.log(arr1); // => [6, 'not null!', undefined]
// see how they both point to the same data they can both change? watch this.
arr1 = undefined;
console.log(arr1, arr2); // => undefined, [6, 'not null!', undefined] 
// since both variables only contain a reference to a value thats just flaoting in memory, if we remove the reference
// from just one of the variables, the second variable becomes the last value that holds a reference to the value
// complex datatypes only get "deleted" by JavaScript if all variables holding references lost the references
