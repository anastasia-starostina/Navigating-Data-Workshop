// Print out into the console the entire SOCBook object
console.log(SOCBook);

// Take a look at it in the console
// Notice the shape of the data, and all of the different information contained in it
// Try and play to print out the different parts of the data into the console
// For all the following tasks, access/select the data required through the SOCBook object

// Task 1
// Complete the function so it returns Liz Rios' favourite fruit

function lizRiosFavFruit() {
  // Your code goes here...
  return SOCBook.data.people[10].favoriteFruit;
}

console.log("Liz Rios' favourite fruit is:", lizRiosFavFruit());

// Task 2
// Complete the function so it returns Marie David's 2nd friend's name

function marieDavid2ndFriend() {
  // Your code goes here...
  return SOCBook.data.people[15].friends[1].name;
}

console.log("Marie David's 2nd friend is:", marieDavid2ndFriend());

// Task 3
// Complete the function so it Cooper Brady's greeting message is shown in the p tag with the id of "message"
// We've helped start breaking down the plan!

function cooperBradyGreeting() {
  // Your code goes here...
  // Select Cooper Brady's greeting message from the object
  // Select the p tag with the id of message
  // Set the text of the p tag to be the greeting message
  let cbGreeting = SOCBook.data.people[18].greeting;
  let p = document.querySelector('#message');
  p.innerText = cbGreeting;
}

cooperBradyGreeting();

// Task 4
// Complete the following function
// In it, we want to take in an email as a parameter, and loop through search for the person who has that email
// If we find them, return the person
// If we don't, return null

let totalPeople = SOCBook.data.people;
function findPersonByEmail(email) {
  //what are we searching? SOCBook.data.people[i].email
  for (i = 0; i < totalPeople.length; i++) {
  const person = totalPeople[i]
  if (person.email = email) {
  return person.name}
   else {return 'null'}
}
}
const found = findPersonByEmail("carversalinas@comtent.com");
console.log("What I found:", found);

// Task 5
// Make a list containing only the people's names who's favourite fruit is a mango
SOCBook.data.people

//Identify people whose favourite fruit is mango +
//Iterate through the list of people to find the ones whose favourite fruit is mango +
//Put them in an array +

function getMangoLovers(fruit) {
  let mangoLovers = [];
   for (i = 0; i < totalPeople.length; i++) {
  let person = totalPeople[i];
  if(person.favoritefruit = 'mango') {
    return mangoLovers.concat(person.name);
  } else {
    return 'null'
  }
  }
  // Your code goes here...
}

console.log("Who loves mango?", getMangoLovers());

// Task 6
// Complete the function. Try and return the address of the person in the position in the array we've been handed
// Find person's address in the given array position
// - loop through the array to return data
// Return this person's address 

function getAddress(positionInArray) {
  for (i = 0; i < totalPeople.length; i++) {
    positionInArray = totalPeople[i];
    return positionInArray['full address']
  }
  // Your code goes here...
}

console.log(getAddress(0));

// Task 7
// Show a profile for each person in the ul with id "profiles"
// A profile should include their name, age, and their image
// Remember, break this down and tackle it step by step!
