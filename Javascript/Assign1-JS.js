//Assignment 18 April, Idara Noor 4-6
//Q1: 
//Calculate the zakat value, first, create a variable named "zakatPercentage" and store the value of 2.5% in it (hint: 2.5% means 0.025). Next, create another variable named "userInput" and take the input from the user using the prompt. Make sure the input value is of a type number by converting the input string to a number using a suitable method. Then, create a variable named "result" and assign its value to the multiplication of the zakat percentage and user input. Finally, use an alert message to display the calculated zakat value. The message should look like this: "Your zakat value is xxx".

var zakatPercentage = 0.025;
var userInput = + prompt ("Write Your Assets Value Here.");
var result = zakatPercentage * userInput;
alert("Your Zakat value is " + result);

//Q2
//calculate the fitrah amount, first, ask the user to enter the total number of family members using the prompt and store the value in a variable called "familyMembers". Next, ask the user to choose a fitrah method by providing them options using the prompt, and store the selected method and its price in variables. Then, use an if-else block to check the user's input and calculate the fitrah amount by multiplying the selected method's price with the number of family members. Finally, display the calculated fitrah amount using an alert message.
//(fitrahMethod === "Flour")

var familyMembers = + prompt ("Write total number of Family Members.");
var fitrahMethod = + prompt ("Choose your Fitrah method: Rice (450Rs./person), Dates (1602Rs./person), or Flour (252Rs./person)");
var price; 
if (fitrahMethod === "Rice") {
    price = 450; 
} else if (fitrahMethod === "Dates") {
    price = 1602; 
} else {
    price = 252; 
}  
var fitrahAmount = familyMembers * price
alert("The Calculated Fitrah Amount of " + familyMembers + " using the selected fitrah method is Rs." + fitrahAmount + " only");

//Q3
// Create a program that generates a random number between 1 and 10 and stores it
// in a variable called "secretNumber". Then, ask the user to enter a guess for the
// secret number using a prompt.
// Use an if-else statement to check if the user's guess matches the secret number. If
// the guess is correct, display a message using an alert saying "Congratulations! You guessed the secret number". Otherwise, if the guess is too high or too low, display
// an appropriate message informing the user to guess again.

var secretNumber = 7;
var guessNumber = + prompt ("Enter a number to guess the Secret number.");
if (guessNumber === secretNumber) {
    alert("Congratulations! You guessed the Secret number.");
}
else {
    alert("Ohh! Unfortunately your guess was incorrect please try your luck again.");
}

//Q4
// Create a program that asks the user to enter a name, and then prints out the name
// with the first letter capitalized (Make your name in capitalized case).

var userName = prompt ("Please enter your name")
var firstChar = userName.slice (0, 1);
var otherChar = userName.slice (1);
firstChar = firstChar.toUpperCase ();
otherChar = otherChar.toLowerCase ();
var capName = firstChar + otherChar;
console.log(capName);

//Q5
//In this task, you will be creating two empty arrays called "contactNumbers" and
// "contactNames". Using the prompt, you will ask the user to enter a contact number
// and contact name. You will then push these values into their respective arrays
// using the push method. After adding all the contacts, you will display the contact
// numbers and names in the console. To do this, you will need to use a for loop to
// iterate through both arrays and log each element to the console.
// Make sure to use descriptive variable names and comment on your code for clarity

// Create empty arrays to store contact numbers and names
let contactNumbers = [];
let contactNames = [];

// Prompt user to enter contact number and name until they enter "exit"
while (true) {
  const number = prompt("Enter contact number (or type 'exit' to stop): ");
  if (number === "exit") {
    break;
  }
  const name = prompt("Enter contact name: ");

  // Push the contact number and name into their respective arrays
  contactNumbers.push(number);
  contactNames.push(name);
}

// Display the contact numbers and names in the console using a for loop
console.log("Contact Numbers:");
for (let i = 0; i < contactNumbers.length; i++) {
  console.log(contactNumbers[i]);
}

console.log("Contact Names:");
for (let i = 0; i < contactNames.length; i++) {
  console.log(contactNames[i]);
}

//Q6
// Create an Array that contains different products, and get input from the user in which you
// ask your user to give the position of that element he/she wants. Now remove that Item
// from your array and console the removed item, Also display the remaining items in the
// array and total number of items remaining.

let products = ["Dishes", "Spoon", "Pan", "Fork", "Knife"];
let indexToRemove = prompt(`Enter the index (0-4) of the product to remove`);
indexToRemove = Number (indexToRemove);
let removedProduct = products.splice(indexToRemove, 1)[0];
console.log(`Removed product:` + removedProduct);
console.log(`Remaining products:` + products.slice(removedProduct));
console.log(`Total number of remaining products:` + removedProduct.length);


//Q7
// Create a program that asks the user for their nationality, gender, and age using the prompt
// function. The program should then use nested if-else statements to determine if the
// person is eligible to vote.
// First, the program should check if the person is Pakistani or Indian. If they are not, the
// program should display a message saying they are not eligible to vote.
// If they are Pakistani or Indian, the program should then check their gender. If the person is
// male and over the age of 18, they are eligible to vote. If the person is female and over the
// age of 18, the program should ask if they are married. If they are married, they are eligible
// to vote. If they are not married, they are not eligible to vote.
// If the person is under 18, the program should display a message saying they are not eligible
// to vote.


let nationality = prompt("What is your nationality?");
let gender = prompt("What is your gender?");
let age = Number (prompt("What is your age?"));

if (nationality === "Pakistani" || nationality === "Indian") {
  if (gender === "male" && age >= 18) {
    console.log("You are eligible to vote.");
  } else if (gender === "female" && age >= 18) {
    let married = prompt("Are you married? (yes or no)");
    if (married === "yes") {
      console.log("You are eligible to vote.");
    } else {
      console.log("You are not eligible to vote.");
    }
  } else {
    console.log("You are not eligible to vote.");
  }
} else {
  console.log("You are not eligible to vote.");
}

// //Q8
// You have an array of that contains the name of Pakistani Teams Player selected for
// WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
// India, So make an array of final team players (11 Players) that will be playing in tomorrows
// match from the WorldCupSquad array.
// (Hint : Make sure it should not disturb the array that contains 15 players instead you have
// to make a copy of this array)

var World_Cup_Squad = ["player1", "player2", "player3", "player4", "player5", "player6", "player7", "player8", "player9", "player10", "player11", "player12", "player13", "player14", "player15"]
var finalTeam = World_Cup_Squad.slice(0,11);
console.log(finalTeam);

