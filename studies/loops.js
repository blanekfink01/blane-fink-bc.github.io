/**
 * LOOPS
 * 
 * 0. Loops run a code block over and over until the stop condition is met.
 *  There are three types of loops for different cases: while, for, and for-in loops
 */

// 1. While loops //
// while loops will loop through a code block as long as a condition remains true
let i = 0;          // value for the condition
while (i < 5) {     // while i is less than 5 the code block will be run forever
    console.log(i); // => 0, 1, 2, 3, 4
    i++;            // here we are adding 1 to i once every code block iteration so that eventually our condition will no longer be true
}
// 2. For loops //
// for loops run a block of code repeatedly until the stop condition is met
for (let i = 0; i < 5; i++) { // we initialize variable i, our stop condition will stop when i is not < 5, and i++ after code is run
    console.log(i);  // => 0, 1, 2, 3, 4
}
for (let i = 5; i > 0; i--) {
    console.log(i);  // => 5, 4, 3, 2, 1
}

// 3. For-in loops //
// for in loops are used to loop over values of an object since the most common use of loops is iterating over arrays and
// a for loop by itself I think is impossible to iterate over an object
let names = {name: 'blane', lastName: 'fink'}; // created an object
for (let key in names) { // this iterates over each key of the object, making the key equal the declared object that is specified
    console.log(names[key], key); // => 'blane', 'name', 'fink', 'lastName';
}

// 4. Looping over an array forwards and backwards //
let array = [5, 4, 3, 2]; // array here 
for (let i = 0; i < array.length; i++) { // will iterate trhough each elelemt of array
    console.log(array[i]); // 5, 4, 3, 2 , 1
}
                                   
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]); // prints 2, 3, 4, 5
}