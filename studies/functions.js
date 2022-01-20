/**
 * FUNCTIONS
 * 
 * 0. Programs will almsot always require custom code that performs certain tasks to achieve the program's goals
 * but many different aspects of the program will need to use the exact same code to do different tasks.
 * Functions are the solution to that problem! A function will run whatever code you put in it when you call it.
 * It will use values you pass in, and return whatever value you tell it to
 */
 
 // 1. First we must create a function //
 
 function print(string1, string2) {// function creates a function. print is the name to call the function
    // string1 and string2 are parameters the function has. when we call this later we will call it with vals that will be stored accordingly
    console.log(string1 + string2); 
    return string1 + string2;
}

// 2. We may now call the function // 

print('i like', 'some dogs') // here are function arguments. they will respectively take the place of string1 and string2 in a new instance of the print function.
// it will log'i likesome dogs' and then return that value; meaning the function call is replaced with the value after return in the function

// 3. Assigning the function to a normal variable //
/**
 * sometimes we may want to name a function as a different type of variable other than function for scope or hoisting or syntax reasons
 */
 const print = function(string1, string2) { // functions can also be declared anonymously by ommiting the name youd normally give it like we should do here
    console.log(string1 + string2); 
    return string1 + string2;
}
print('h', 'i');
console.log(string1, string2); // => referenceerror // variables bound to functions cannot be accessed by an outer scope including outer functions trying to access inner ones
// 4. Inputs and outputs //
// the inputs of a function are the parameters and when it is called with data the data passed in is called arguments,
// and the function will always return only what is meant to be returned or undefined if not specified

// 5. Functions and its variable access //
// Functions can see and modify variables in parent or global scopes. The inverse is NOT true.

// 6. Arrow functions //
// arrow functions are functions written with syntactic sugar and have a lexical scope
const print = (string1, string2) => { // if only one parameter, the parenthesis can be omitted
    console.log(string1 + string2); 
    return string1 + string2; 
    // if the code was short enough, you could omit the {} and whatever expression you put after the array would be returned w/o "return"
    // ex num => num++ // this is a valid function that takes in a "num" value adds 1 to it, then returns it
}

// 7. Closure //
/* Functions form closures around the data they house. If an object returned from the Function and is held in memory somewhere
 * (referenced), that closure stays ALIVE, and data can continue to exist in these closures!
 */
const print = (string1, string2) => {
    console.log(string1 + string2); 
    return () => string1 +string2; 
}
let closure = print('str', 'ing'); // => returns a function with access to the initial string1 and string2 values
let stringgg = closure(); // looks up the string1 and string2 values from it's parent function and returns them concatenated