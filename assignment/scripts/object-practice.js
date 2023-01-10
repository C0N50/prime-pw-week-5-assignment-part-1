console.log('***** Object Practice *****')
console.log('/n/n');
// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
    // TODO - add properties here
  firstName: 'Connor',
  lastName: 'Ferris',
  hasSiblings: true,
  shoeCount: 10,
  favThreeFoods: ['Tacos', 'Pizza', 'Cheeseburgers']
};
console.log('#1: A little about me:', me);
console.log('\n\n');

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/

let fullName = me.firstName + ' ' + me.lastName;

console.log('#2: My Full Name is ' + fullName + '.');
console.log('\n\n');

/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/

console.log ('#3: My first favorite food is ' + me.favThreeFoods[0] + '.');
console.log ('#3: My last favorite food is ' + me.favThreeFoods[2] + '.');
console.log('\n\n');

/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/

console.log ('#4: I have ' + me.shoeCount + ' pairs of shoes!');
me.shoeCount += 1;
console.log ('#4: Now, I have ' + me.shoeCount + ' pairs of shoes!');
console.log('\n\n');

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/

me.favoriteColor = 'Cyan';
console.log ('A brief look at my qualities', me);