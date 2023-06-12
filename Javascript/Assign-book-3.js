// //Assignment 3 of javascript a book
// Dead line is 9th june 2023


// //Assign no. 1
// //ALERT
// //Q1. Write a script to greet your website visitor using JS alert box

var visitorName = prompt("Welcome to the website! What's your name?");
var greeting = "Hello, " + visitorName + "! Thanks for your visit.";
alert(greeting);

// //Q2 Write a script to display following message on your web page

var password = prompt("Please enter your password");
  alert("Error! Please enter a valid password.");

// //Q3 Write a script to display following message on your web page: (Hint : Use line break)

var message = "Welcome to JS land... \n";
message += "Happy Coding! \n";
alert(message);

// //Q4 Write a script to display following messages in sequence:

alert("Welcome to JS land..");
var message2 = "Happy Coding! \n";
message2 += "-Prevent this page from creating additional dialogs. \n";
alert(message2);

// //Q5 Generate the following message through browser’s developer console:
// I have write and try the same link mentioned below in the console of my web browser
//To do this I oppend my web browser press F12 then click on console then starts writing 
alert("Hello.. I can run JS through my Web browser's console.")

// //Q6Make use of alerts in your new/existing HTML & CSS project.
//answer
// I have write alert in html it works very well i also done Q8 from chap 2 
// I also try to write Alert in css but it won't work because css and js is different languages"

// //Q7 Practice placement of <script></script> element in following sections of your project in exercise 6:
// a. Head 
// b. Body (before your page’s HTML)
// c. Body (inside your page’s HTML) 
// d. Body (after your page’s HTML) 
//answer
// check index.html for this

//assignment no. 2 Variables for string

//1.Declare a variable called username.

var userName;

// 2. Declare a variable called myName & assign to it a string that represents your Full Name.

var myName = "Yousra Khurshid";

// 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

var titleMessage = "Hello World";
alert (titleMessage);

// 4. Write a script to save student’s bio data in JS variables and 
// show the data in alert boxes.

var studentName = prompt("Enter Your Name");
var studentAge = prompt("Enter Your Age");
var studentCourse = prompt("Enter Your Course Name");

// 5. Write a script to display the following alert using one JS 
// variable:
 var pizza = "PIZZA\n";
 pizza += "PIZZ\n";
 pizza += "PIZ\n";
 pizza += "PI\n";
 pizza += "P\n";
 alert (pizza);

// 6. Declare a variable called email and assign to it a string that 
// represents your Email Address(e.g. example@example.com). 
// Show the blow mentioned message in an alert box.(Hint: use 
// string concatenation)
 
var myEmail = "yousrakhurshid1@gmail.com"

alert ("My Email Address is " + myEmail)

// 7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:
var book = "I'm trying to learn from a book A Smarter Way To Learn Javascript";
alert (book);
// 8. Write a script to display this in browser through JS

document.write ("Yeah I can Write HTML content through JS.<br>")

// 9. Store following string in a variable and show in alert and browser through JS “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”

var theEnd = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert (theEnd); 

// assignment no. 3

// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.

var age = 22;
alert ("I am " + age + " years old");

// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

// var visits = parseInt(localStorage.getItem('visits')) + 1;

// alert ("You Have Visited tis site " + visits +" times");

// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:
var birthYear = 2000;
var content = "Hey! my Birth year is " + birthYear + ".<br>";
content += "  Data type of my declared variable is number.<br> ";
document.write(content);

// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
var visitorName = "YK";
var productTitle = "shirt";
var quantity = 5;

var message = visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.<br>";

document.write(message);

// assign no. 4

//q1 
var name1, myName, $name_3;
//q2
// 5 legal variable names
var name1;
var legalName;
var name_3;
var $name_;
var _name;
//5 illegal names

// var 123name;
// var !name;
// var Illegal name;
// var var;
// var illegal-name;

//q3
var heading = "<h1>Rules for naming JS variables.</h1><br>";
var message = "Variable names can only contain letters, numbers, $, and _. For example, $my_1stVariable.<br>";
message += "Variables must begin with a letter, $, or _. For example, $name, _name, or name.<br>";
message += "Variable names are case sensitive.<br>";
message += "Variable names should not be JS keywords.<br>";

document.write(heading + "<br>");
document.write(message + "<br> <br> <br>");

//assign no. 5
// q1 adding
var num1 = +prompt ("write a number");
var num2 = +prompt ("write an another number");
var numsSum = num1 + num2;
document.write ("Sum of " + num1 + " and " + num2 + " is " + numsSum + ".<br>"); 

//q2 subtraction, multiplication ond modulus

var num1 = +prompt ("write a number");
var num2 = +prompt ("write an another number");
var numsSub = num1 - num2;
document.write ("Subtraction of " + num1 + " from " + num2 + " is " + numsSub + ". <br>"); 

var num1 = +prompt ("write a number");
var num2 = +prompt ("write an another number");
var multiplier = num1 * num2;
document.write ("Multiplication of " + num1 + " and " + num2 + " is " + multiplier + ". <br>"); 

var num1 = +prompt ("write a number");
var num2 = +prompt ("write an another number");
var division = num1 / num2;
document.write ("Division of " + num1 + " and " + num2 + " is " + division + ". <br>");

var num1 = +prompt ("write a number");
var num2 = +prompt ("write an another number");
var modulus = num1 / num2;
document.write ("Remainder of " + num1 + " and " + num2 + " is " + modulus + ". <br>");

//q3

var myVariable;

document.write("Value after variable declaration is: " + myVariable + "<br>");

myVariable = 5;

document.write("Initial value: " + myVariable + "<br>");

myVariable++;

document.write("Value after increment is: " + myVariable + "<br>");

myVariable += 7;

document.write("Value after addition is: " + myVariable + "<br>");

myVariable--;

document.write("Value after decrement is: " + myVariable + "<br>");

var remainder = myVariable % 3;

document.write("The remainder is: " + remainder + "<br>");

//q4

var ticketPrice = 600;
var numTicket = 5;
var totalPriceOfTicket = ticketPrice * numTicket;
document.write("Total cost to buy " + numTicket + " tickets is " + totalPriceOfTicket + "PKR <br>");

//q5

var number = parseInt(prompt("Enter a number:"));

document.write("<h2> Multiplication Table of " + number + "</h2>");
for (var i = 1; i <= 10; i++) {
    var result = number * i;
    document.write(number + " x " + i + " = " + result + "<br> <br>");
}

//q6
var celsius = 25;
var fahrenheit = 444;

var cTof = (celsius * 9/5) + 32;
var fToc = (fahrenheit - 32) * 5/9;

document.write (celsius + "oC is " + cTof + "oF <br>");
document.write (fahrenheit + "oF is " + fToc + "oC <br>");

//q7

var priceOfItem1 = 10;
var priceOfItem2 = 20;
var orderedQuantityOfItem1 = 2;
var orderedQuantityOfItem2 = 3;
var shippingCharges = 5;


var totalCost = (priceOfItem1 * orderedQuantityOfItem1) + (priceOfItem2 * orderedQuantityOfItem2) + shippingCharges;


document.write("<h1>Shopping Cart</h1>");
document.write("<p>Price of Item 1: $" + priceOfItem1 + "</p>");
document.write("<p>Price of Item 2: $" + priceOfItem2 + "</p>");
document.write("<p>Ordered Quantity of Item 1: " + orderedQuantityOfItem1 + "</p>");
document.write("<p>Ordered Quantity of Item 2: " + orderedQuantityOfItem2 + "</p>");
document.write("<p>Shipping Charges: $" + shippingCharges + "</p>");
document.write("<h3>Total Cost: $" + totalCost + "</h3>");

//q8
var totalMarks = 990;
var obtainedMarks = 880;
var percentage = obtainedMarks / totalMarks * 100;

document.write("Total marks: " + totalMarks + " <br>");
document.write("Obtained marks: " + obtainedMarks + " <br>");
document.write("Percentage: " + percentage + "%<br>");

//q9
var usDollar = 10;
var saudiRiyal = 25;
var dTop = usDollar *  104.80;
var sTop = saudiRiyal * 28;
var totalCurrency = dTop + sTop;
document.write("Total Currency in PKR: " + totalCurrency + "<br>");

//q10
var digit = 10;
var expression = ((digit + 5) * 10)/ 5;
console.log(expression); 

//q11
var currentY = 2023;
var birthY = 2000;
var possibleAge1 = currentY - birthY;
var possibleAge2 = possibleAge1 - 1;

var calHeading = "<h1>Age Calculator</h1>";
var display = "<p style='font-size: 14px;'>Current Year: " + currentY + "</p>";
display += "<p style='font-size: 14px;'>Birth Year: " + birthY + "</p>";
display += "<p style='font-size: 14px;'>Your Age is: " + possibleAge1 + "</p>";
display += "<p style='font-size: 14px;'>You are either " + possibleAge1 + " or " + possibleAge2 + " years old.</p>";

document.write(calHeading);
document.write(display);

//q12
var radius = 33;
var radiusC = "Radius of a circle: " + radius + "<br>";
var circumC = 2 * 3.142 * radius;
var circum = "The Circumference is: " + circumC + "<br>";
var areaC = 3.142 * (radius * radius);
var areaOfCircum = "The Area is: " + areaC + "<br>";
var geomHeading = "<h1>The Geometrizer</h1>" 
document.write(geomHeading);
document.write(radius); 
document.write(circum);
document.write(areaOfCircum);

//q13
var snackN = "Icecream"
var currentAge = 22;
var currentAgeS = "Current age: " + currentAge + "<br>";
var maxAge = 68;
var maxAgeS = "Estimated Maximum age: " + maxAge + "<br>";
var perDay = 2;
var perDayS = "Amount of snacks per day: " + perDay + "<br>";
var neededSnack = (maxAge - currentAge) * perDay;
var statment = "You will need " + neededSnack +" " + snackN + " to last you until the ripe old age of <br>" + maxAge;
var geomHeading = "<h1>The time Supply Calculator</h1>";
document.write(geomHeading);
document.write(snackN);
document.write(currentAgeS);
document.write(maxAgeS)
document.write(perDayS);
document.write(statment);

//assign no. 6
//q1
var a = 2;
document.write("The value of a is: " + a + "<br>");
document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br>");
a = 10;
document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br>");
document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br>");
document.write("The value of a- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br>");

//q2
var a = -2, b = 1;
var result = --a - --b + ++b + b--;
document.write("a is " + a + "<br>");
document.write("b is " + b + "<br>");
document.write("Now the value of a is: " + result + "<br>");

// Step 1: --a
// In this step, the value of a is decremented by 1 using the prefix decrement operator --. Since a starts with the value of -2, it becomes -3 after the decrement.

// Step 2: --a - --b
// In this step, the value of both a and b is decremented by 1 using the prefix decrement operator --. After the decrement, a becomes -4, and b becomes 0. The expression becomes -4 - 0, which equals -4.

// Step 3: --a - --b + ++b
// Here, a is again decremented by 1, so it becomes -5. The prefix decrement operator -- is also applied to b, resulting in the value -1. Then, b is incremented by 1 using the prefix increment operator ++, making it 0. The expression becomes -5 - (-1) + 0, which simplifies to -5 + 1 + 0, resulting in -4.

// Step 4: --a - --b + ++b + b--
// In this final step, a is decremented by 1, making it -6. Both b and result are decremented by 1 using the postfix decrement operator --, so b becomes -1, and result becomes -5. The expression now becomes -6 - (-1) + 0 + (-1), which simplifies to -6 + 1 + 0 - 1, resulting in -6.

//q3
var name = prompt("Enter your name:");
document.write("Hello, " + username + "! Welcome to our website.");

//q4
var number = prompt("Enter a number:");
if (number === "") {
  number = 5; // Default value if no input is provided
}

document.write("<h2>Multiplication Table of " + number + "</h2>");
for (var i = 1; i <= 10; i++) {
  document.write(number + " x " + i + " = " + (number * i) + "<br>");
}

//q5
var subject1 = prompt("Enter the name of subject 1:");
var subject2 = prompt("Enter the name of subject 2:");
var subject3 = prompt("Enter the name of subject 3:");
var totalMarks = 100;

var obtainedMarks1 = prompt("Enter obtained marks for " + subject1 + ":");
var obtainedMarks2 = prompt("Enter obtained marks for " + subject2 + ":");
var obtainedMarks3 = prompt("Enter obtained marks for " + subject3 + ":");

var totalObtainedMarks = parseInt(obtainedMarks1) + parseInt(obtainedMarks2) + parseInt(obtainedMarks3);
var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;

document.write("<h2>Result</h2>");
document.write("<table>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
document.write("</table>");
document.write("Total Obtained Marks: " + totalObtainedMarks + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%");


//Assign no. 35-38
//Q1

 function displayDateTime() {
  var currentDateTime = new Date();
  console.log(currentDateTime);
}

displayDateTime();

//Q2

function greetUser(firstName, lastName) {
  var fullName = firstName + " " + lastName;
  console.log("Hello, " + fullName + "!");
}

greetUser("John", "Doe");
 

//Q3

function addNumbers(num1, num2) {
  var sum = num1 + num2;
  return sum;
}

var result = addNumbers(5, 3);
console.log(result);

//q4

 function calculator(num1, num2, operator) {
  var result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      console.log("Invalid operator");
  }

  console.log("Result: " + result);
}

calculator(5, 3, "+");


//Q5

 function squareNumber(num) {
  var square = num * num;
  return square;
}

var result = squareNumber(4);
console.log(result);

//Q6
 function factorial(number) {
  var result = 1;
  for (var i = number; i >= 1; i--) {
    result *= i;
  }
  return result;
}

console.log(factorial(5)); 

//q7
function countNumbers(start, end) {
  for (var i = start; i <= end; i++) {
    console.log(i);
  }
}

countNumbers(1, 5);

//Q8

function calculateHypotenuse(base, perpendicular) {
  function calculateSquare(num) {
    return num * num;
  }

  var baseSquare = calculateSquare(base);
  var perpendicularSquare = calculateSquare(perpendicular);
  var hypotenuseSquare = baseSquare + perpendicularSquare;
  var hypotenuse = Math.sqrt(hypotenuseSquare);
  return hypotenuse;
}

console.log(calculateHypotenuse(3, 4)); 

//q9
// Arguments as value
function calculateRectangleArea(width, height) {
  var area = width * height;
  return area;
}

console.log(calculateRectangleArea(5, 3));

// Arguments as variables
var width = 5;
var height = 3;
console.log(calculateRectangleArea(width, height)); 

//q10

function isPalindrome(str) {
  var reversedStr = str.split("").reverse().join("");
  if (str === reversedStr) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("madam")); // Output: true

//q11

function capitalizeFirstLetter(str) {
  var words = str.split(" ");
  for (var i = 0; i < words.length; i++) {
    var firstLetter = words[i][0];
    var restOfWord = words[i].slice(1);
    words[i] = firstLetter.toUpperCase() + restOfWord;
  }
  var capitalizedStr = words.join(" ");
  return capitalizedStr;
}

console.log(capitalizeFirstLetter("the quick brown fox"));

//q12
function findLongestWord(str) {
  var words = str.split(" ");
  var longestWord = words[0];
  for (var i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord("Web Development Tutorial")); 

//q13
function countLetterOccurrences(str, letter) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
}

console.log(countLetterOccurrences("JSResourceS.com", "o"));

//q14
function calcCircumference(radius) {
  var circumference = 2 * Math.PI * radius;
  console.log("The circumference is " + circumference);
}

function calcArea(radius) {
  var area = Math.PI * radius * radius;
  console.log("The area is " + area);
}

calcCircumference(5);
calcArea(5); 

//assignment 9-10
//q1 Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
 
var cityName = prompt ("Write your city Name.")
if (cityName == "Karachi") {
  alert("Welcome to city of lights");
}
else {
alert("Welcome to " + cityName);
}

// //q2Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the 
// user is female, give the message: Good Morning Ma’am.

var gender = prompt ("Write your gender.");
if (gender == "male") {
  alert("Good morning Sir.");
} else {
  alert("Good morning Ma'am");
}

//q3 Write a program to take input color of road traffic signal 
// from the user & show the message according to this table:

var trafficSignal = prompt ("Write color of road traffic signal.")
if (trafficSignal == "Red") {
  alert("Must Stop");
} else if (trafficSignal == "Yellow") {
alert("Ready to move");
} else {
  alert("Move now");
}

//q4 Write a program to take input remaining fuel in car (in 
// litres) from user. If the current fuel is less than 0.25litres, 
// show the message “Please refill the fuel in your car”

var remainingFuel = prompt ("Write the remaining fuel in car (in liters).");
if (+remainingFuel < 0.25){
  alert ("Please refill the fuel in your car");
}

//q5

// a. 
// ```javascript
var a = 4;
if (++a === 5){
  alert("given condition for variable a is true");
}
// ```
// Output: "given condition for variable a is true"

// b. 
// ```javascript
var b = 82;
if (b++ === 83){
  alert("given condition for variable b is true");
}
// ```
// Output: No alert message will be displayed.

// c. 
// ```javascript
var c = 12;
if (c++ === 13){
  alert("condition 1 is true");
}
if (c === 13){
  alert("condition 2 is true");
}
if (++c < 14){
  alert("condition 3 is true");
}
if(c === 14){
  alert("condition 4 is true");
}
// ```
// Output: "condition 2 is true" and "condition 4 is true"

// d. 
// ```javascript
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
  alert("The cost equals");
}
// ```
// Output: "The cost equals"

// e. 
// ```javascript
if (true){
  alert("True");
}
if (false){
  alert("False");
}
// ```
// Output: "True"
if ("car" < "cat"){
  alert("car is smaller than cat");
}
//output: car is smaller than cat
//q6
// assignment 38-44
//q1
function power(a, b) {
  return Math.pow(a, b);
}

console.log(power(2, 3)); 

//q2

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(2020)); 

//q3

function calculateTriangleArea(a, b, c) {
  var s = (a + b + c) / 2;
  var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area;
}

console.log(calculateTriangleArea(3, 4, 5)); 

//q4

function calculateAverage(marks1, marks2, marks3) {
  var totalMarks = marks1 + marks2 + marks3;
  var average = totalMarks / 3;
  return average;
}

function calculatePercentage(marks1, marks2, marks3) {
  var totalMarks = marks1 + marks2 + marks3;
  var percentage = (totalMarks / 300) * 100;
  return percentage;
}

function mainFunction(marks1, marks2, marks3) {
  var average = calculateAverage(marks1, marks2, marks3);
  var percentage = calculatePercentage(marks1, marks2, marks3);
  console.log("Average: " + average);
  console.log("Percentage: " + percentage + "%");
}

mainFunction(80, 90, 95); 

//q5

function customIndexOf(str, char) {
  for (var i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return i;
    }
  }
  return -1;
}

console.log(customIndexOf("Hello", "e")); 

//q6

function deleteVowels(sentence) {
  var vowels = "aeiouAEIOU";
  var result = "";
  for (var i = 0; i < sentence.length; i++) {
    if (vowels.indexOf(sentence[i]) === -1) {
      result += sentence[i];
    }
  }
  return result;
}

console.log(deleteVowels("This is a sentence")); 
 

//q7

function countSuccessiveVowels(sentence) {
  var vowels = "aeiouAEIOU";
  var count = 0;
  for (var i = 0; i < sentence.length - 1; i++) {
    if (vowels.indexOf(sentence[i]) !== -1 && vowels.indexOf(sentence[i + 1]) !== -1) {
      count++;
    }
  }
  return count;
}

console.log(countSuccessiveVowels("Pleases read this application and give me gratuity")); 

//q8

function convertToMeters(km) {
  return km * 1000;
}

function convertToFeet(km) {
  return km * 3280.84;
}

function convertToInches(km) {
  return km * 39370.1;
}

function convertToCentimeters(km) {
  return km * 100000;
}

var distanceInKm = 10;
console.log("Distance in Meters: " + convertToMeters(distanceInKm));
console.log("Distance in Feet: " + convertToFeet(distanceInKm));
console.log("Distance in Inches: " + convertToInches(distanceInKm));
console.log("Distance in Centimeters: " + convertToCentimeters(distanceInKm));
 

//q9

function calculateOvertimePay(hoursWorked) {
  var normalPayRate = 10.00; // Assuming normal pay rate is Rs. 10.00 per hour
  var overtimePayRate = 12.00; // Rs. 12.00 per hour for overtime

  if (hoursWorked > 40) {
    var overtimeHours = hoursWorked - 40;
    var overtimePay = overtimeHours * overtimePayRate;
    return overtimePay;
  } else {
    return 0;
  }
}

console.log(calculateOvertimePay(45));


//q10

 function calculateCurrencyNotes(amount) {
  var notesOf100 = Math.floor(amount / 100);
  var remainingAmount = amount % 100;
  var notesOf50 = Math.floor(remainingAmount / 50);
  remainingAmount = remainingAmount % 50;
  var notesOf10 = Math.floor(remainingAmount / 10);

  return {
    notesOf100: notesOf100,
    notesOf50: notesOf50,
    notesOf10: notesOf10
  };
}

console.log(calculateCurrencyNotes(320)); // Output: { notesOf100: 3, notesOf50: 0, notesOf10: 2 }


//assignment 49-52
//q1
var signupForm = document.getElementById('signupForm');
var formDataList = document.getElementById('formDataList');

signupForm.addEventListener('submit', function(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  var formData = {
    name: name,
    email: email,
    password: password
  };

  var formDataItem = document.createElement('li');
  formDataItem.textContent = JSON.stringify(formData);
  formDataList.appendChild(formDataItem);

  signupForm.reset();
});

//q2

var readMoreButtons = document.getElementsByClassName('read-more');

    Array.from(readMoreButtons).forEach(function(button) {
      button.addEventListener('click', function() {
        var itemDetails = this.nextElementSibling;
        itemDetails.style.display = 'block';
      });
    });
    
//q3

var studentForm = document.getElementById('studentForm');
var studentTableBody = document.getElementById('studentTableBody');

studentForm.addEventListener('submit', function(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var age = document.getElementById('age').value;

  var newRow = document.createElement('tr');
  var nameCell = document.createElement('td');
  var ageCell = document.createElement('td');
  var actionsCell = document.createElement('td');
  var deleteButton = document.createElement('button');
  var editButton = document.createElement('button');

  nameCell.textContent = name;
  ageCell.textContent = age;
  deleteButton.textContent = 'Delete';
  editButton.textContent = 'Edit';

  deleteButton.addEventListener('click', function() {
    studentTableBody.removeChild(newRow);
  });

  editButton.addEventListener('click', function() {
    document.getElementById('name').value = name;
    document.getElementById('age').value = age;
  });

  actionsCell.appendChild(deleteButton);
  actionsCell.appendChild(editButton);

  newRow.appendChild(nameCell);
  newRow.appendChild(ageCell);
  newRow.appendChild(actionsCell);

  studentTableBody.appendChild(newRow);

  studentForm.reset();
});



// assignment no. 53-57
//q1
//index.html
//q2
//assihn2.css
//q3
// Image Modal Functions
// Image Modal Functions
function openModal(imgElement) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImg");
  var captionText = document.getElementById("caption");
  modal.style.display = "block";
  modalImg.src = imgElement.src;
  captionText.innerHTML = imgElement.alt;
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Zoom In/Out Functions
var zoomedParagraph = document.getElementById("zoomedParagraph");
var fontSize = 16; // Initial font size

function zoomIn() {
  fontSize += 10;
  zoomedParagraph.style.fontSize = fontSize + "px";
}

function zoomOut() {
  fontSize -= 10;
  if (fontSize < 10) {
    fontSize = 10; // Minimum font size
  }
  zoomedParagraph.style.fontSize = fontSize + "px";
}

// Close modal when the close button or modal background is clicked
var closeBtn = document.getElementsByClassName("close")[0];
var modal = document.getElementById("myModal");

closeBtn.onclick = closeModal;
modal.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

//Assignment # 58-67JAVASCRIPT
//q1
var mainContent = document.getElementById("main-content");
console.log(mainContent.children);

var renderElements = document.getElementsByClassName("render");
for (var i = 0; i < renderElements.length; i++) {
  console.log(renderElements[i].innerHTML);
}

var firstNameInput = document.getElementById("first-name");
firstNameInput.value = "Yousra";

var lastNameInput = document.getElementById("last-name");
var emailInput = document.getElementById("email");
lastNameInput.value = "Bank";
emailInput.value = "yousrakhurshid1@gmail.com";

//q2

// i. What is the node type of the element with id "form-content"?
var formContentElement = document.getElementById("form-content");
console.log(formContentElement.nodeType);

// ii. Show the node type of the element with id "lastName" and its child node.
var lastNameElement = document.getElementById("lastName");
console.log(lastNameElement.nodeType);
console.log(lastNameElement.childNodes[0].nodeType);

// iii. Update the child node of the element with id "lastName".
lastNameElement.childNodes[0].nodeValue = "New Last Name";

// iv. Get the first and last child of the element with id "main-content".
var mainContentElement = document.getElementById("main-content");
console.log(mainContentElement.firstChild);
console.log(mainContentElement.lastChild);

// v. Get the next and previous siblings of the element with id "lastName".
console.log(lastNameElement.nextSibling);
console.log(lastNameElement.previousSibling);

// vi. Get the parent node and node type of the element with id "email".
var emailElement = document.getElementById("email");
console.log(emailElement.parentNode);
console.log(emailElement.nodeType);















