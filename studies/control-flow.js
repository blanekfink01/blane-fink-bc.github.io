/*
* CONTROL FLOW:
*
* 0. Control flow is the controlled flow of data based on tests that resolve to true or false
*/

// 1. If //
// if statements execute a code block specifically if a condition is truthy
if (4 > 2.3) { // you can use comparison operators
    console.log('passed!'); // => 'passed!'
}

// 2. Else-if //
/**
 * after an if statement fails, if there is an else-if statement, it will then test a condition
 * to determine if it should perform diffrent code
 */
if (4 < 2.3) { // conditional now false
    console.log('passed!'); // never runs this code
} else if (true) {
    console.log('flow controlled'); // this code runs because if failed and the else-if passed!
}

// if the initial iff was true, the else if would never run
if (true) {
    console.log('passed!'); // this will always be run in this conditional chain
} else if (true) {
    console.log('flow controlled'); // this code never runs
}

// 3. Else //
/**
 * else statements can be added to the end of an if, if-else chain
 * which runs only if all the truth tests failed
 */
 if (false) {
    console.log('passed!');
} else if (false) {
    console.log('flow controlled');
} else {
    console.log('since all the conditionals are false, only the else code block will run'); // => 'since all the conditionals are false, only the else code block will run'
}

// 4. Switch //
/**
 * switch statements take in a value and can switch to any codeblock based on whether the value meets certain cases
 */

let day = 'Monday';

switch(day) {
    case 'Tuesday':
        console.log('Tuesday');
        break;
    case 'Monday': // if the 'day' matches with the case, this code will run
        console.log('Happy Monday!'); // code runs => 'Happy Monday!'
        break; // ends switch function
    case 'Wednesday':
        console.log("Wednesday"); // this will print => I have $100
        break;
    default:
        console.log('im not sure what day it is!'); // would run if no cases are met like an else statement
        break;
}
