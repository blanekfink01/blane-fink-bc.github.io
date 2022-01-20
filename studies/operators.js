/*
 * OPERATORS:
 *
 * 0. An operator is something that assigns values, compares values, 
 * and performs arithmetic operations. Here is a summary of the most important ones
 */

// 1. Assignment operators //
/*
 * Assignment operators are operators that takes a variable and reassigns a
 * value to it. Here are assignment operators and what they equate to.
 *
 * x  = y === x = y
 * x += y === x = x + y
 * x -= y === x = x - y
 * x *= y === x = x * y
 * x /= y === x = x / y
 * x %= y === x = x % y
 */

// 2. Arithmetic operators //
/*
 * these are operators that perform math on numbers
 * +  Adds two numbers
 * -  Subracts the subtrahend from the minuend 
 * *  Multiplies two numbers
 * /  Divides the dividend by the divisor
 * %  Divides the dividend by the divisor, but only returns the remainder
 * ++ Incrementally adds one to a number 
 * -- Incrementally subracts one from a number
 */
console.log(8 % 0); // => 0
console.log(8 / 8); // => 1

// 3. Comparison operators //
/*
 * these operators compare values on the left with values on the right and resolve to booleans
 * ==  "Loose" equals to
 * === Equal value and value type
 * !=  Not equal
 * !== Not equal value or equal value type
 * > is greater than
 * < is lesser than
 * >= is greater than or equal to
 * <= is less than or equal to
 */

// 4. Logical operators //
/**
 * these are operators that help with many logical decisions
 * && logical and checks if both values on each side resolves to true and resolves to false if one or both are false
 * || logical or checks if either expression is true and resolves to true if just one is true
 * ! bang operator is a truthy flipper. if you put it in front of a value that is truthy it makes it falsey and vice versa
 */
console.log(true && false) // => false
console.log(!!true); // => true // flips to false and back

// 5. Unary operators //
/**
 * unary operators are operators that operate only on one piece of data as opposed to two
 * this consists of !, typeof, and -
 */
// ! flips a values truthiness
console.log(!true); // => false
// typeof resolves to a string representing the type of the value
console.log(typeof 's'); // => 'string'
// - turns any number negative
let n = 50;
console.log(-n); // => -50

// 6. Ternary operator (a ? b : c) //
/**
 * ternary operators are operators that take in 3 values, and there's just one in JavaScript!
 * it takes a conditional, and will resolve to a value if true or the second one if false.
 * It's a simple shorthand if statement!
 */
console.log(5 > 1 ? 'it was true' : 'it was false'); // => 'it was true'
console.log(!5 > 1 ? 'it was true' : 'it was false'); // 'it was false'
