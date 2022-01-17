/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = 'Duck';
animal['name'] = "Drake";
animal.noises = [];
console.log(animal);
//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = 'quack';
noises.push('plat');
noises.unshift('splat');
noises[noises.length] = 'wenk';
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;
animal.noises.push('ruffle');
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */
// 1. [ dot notation or bracket notation] What are the different ways you can access properties on objects?
// 2. [ bracket notation or native array methods] What are the different ways of accessing elements on  arrays?

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
// 1. [x] Create a variable named `animals` and assign it to an empty array.
var animals = [];
// 2. [x] `push` our `animal` that we created to `animals`. You should now see your first animal appear on your `index.html` page!
animals.push(animal);
// 3. [x] `console.log` `animals`. What does it look like?
console.log(animals);
// 4. [x] Create a variable called `duck` and assign it to the data:
//  - `{ species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }`
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
// 5. [x] `push` `duck` to `animals`
animals.push(duck);
// 6. [x] `console.log` `animals`. What does it look like?
console.log(animals);
// 7. [ ] Create two more animal objects each with a species, a name, and at least two sounds sounds and add each one of them to `animals.
animals.push({name: 'Jeff', species: 'Racoon', noises: ['chatter', 'snarl']});
animals.push({name: 'Willy', species: 'Whale', noises: ['siren', 'drawl', 'sing']});
// 8. [ ] `console.log` `animals`, and, `console.log` the length of `animals`. Is everything looking right?
console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// 1. [x] Choose a data structure for this **list** of friends.
// arrays are my choice cuz theyre made to be lists
// 2. [x] Write a comment in your code that explains why you chose this data structure.
// 3. [x] Create a variable called `friends` and assign it to the data structure that you chose.
var friends = [];
// 4. [x] Take a look at the documentation for `Math.random` here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// 5. [x] Write a function called `getRandom` that takes our `animals` array and returns  a random `index` of the input array, using `Math.random`
function getRandom(animalsArray) {
  return Math.floor(Math.random() * animalsArray.length); // num will never hit the length value since it is only supposed to be an index if length === 3 then num === 0 - 2
}
// 6. [x] Using a random index from this function that you just created, get a random animal and add its `name` to `friends`.
friends.push(animals[getRandom(animals)].name);
// 7. [x] `console.log` `friends`.
console.log(friends);
// 8. [x] Using **bracket notation**, add the `friends` list as a **property** also named `friends` on one of the animals in the `animals` array
animals[0].friends = friends; // added friends array to first element of animals array's new 'friends' key
// 9. [x] `console.log` your work.
console.log(animals);


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}