// =============== JavaScript ex (1 to 11) ====================

// ============ (1) Alert ================
// task no: (1)
alert("Hello, World!");
/// task no: (2)
alert("Hassan Javed");
// task no: (3)
alert(2025);
// task no: (4)
var message = "Hello I Am Frontend-Developer"
alert(message);
// task no: (5)
var first = "Hello";
var second = "World!"
var combined = first + second;
alert(combined);
// ============ Alert tasks end ================


// ============ (2) Variables for Strings ==============
// task no: (1)
var userName = "Hassan Javed";
// task no: (2)
var newMessage = "Nice to meet you!"
alert(newMessage);
// task no: (3)
var firstName = "Hassan";
var lastName = "Javed";
var fullName = firstName + " " + lastName;
console.log(fullName);
// task no: (4)
let favoriteQuote = "Work hard in silence, let success make the noise.";
console.log(favoriteQuote);
// task no: (5)
var city = "Karachi";
alert("Welcome to " + city + "!");
// ============ Variables for Strings tasks end ==============

// ============ (3) Variables for Numbers ==============
// task no: (1)
var age = 18;
console.log(age);

// task no: (2)
var num1 = 15;
var num2 = 13;
var sum = num1 + num2;
console.log(sum);

// task no: (3)

var num3 = 50;
var num4 = 20;

var difference = num1 - num2;
console.log(difference);
// task no: (4)

var num5 = 5;
var num6 = 10;

var product = num5 * num6;
console.log(product);

// task no: (5)

let age2 = 20;

alert("You are " + age2 + " years old.");
// ============ Variables for Numbers tasks end ==============

// ============ (4) Math Expressions ==============

// task no: (1)
var x = 10;
var y = 5;
var sum = x + y;
console.log(sum);

// task no: (2)
var sub = x - y;
alert(sub);
// task no: (3)
var mul = x * y;
console.log(mul);

// task no: (4)

var div = x / y;
console.log(div);

// task no: (5)

var rem = x % y;
console.log(rem);
// ============ Math Expressions tasks end ==============

// ============ (5) Prompt: Getting Input from the User ==============

// task no: (1)
var userName = prompt("What is your name?");
alert("Hello," + userName);

// task no: (2)

var age3 = prompt("Enter your age:");
alert("Your age is: " + age3);

// task no: (3)

var userNum = Number(prompt("Enter a number:"));
var double = userNum * 2;
alert("Double of your number is: " + double);

// task no: (4)
var color = prompt("What is your favourite color?");
alert("Wow I Like " + color + " too!")

// task no: (5)
var city = prompt("Enter your city name:");
alert("You are from " + city + ".");
// ============ Prompt: Getting Input from the User tasks end ==============

// ============ (6) If Statement and Comparison Operators:  ==============

// task no: (1)
var age4 = prompt("Enter your age:");
age4 = Number(age4);
if (age4 < 30) {
    alert("You're still a young man.");
} else {
    alert("Age is just a number!");
}

// task no: (2)
var num = prompt("Enter a number:");
num = Number(num);
if (num % 2 === 0) {
    alert("Even number");
} else {
    alert("Odd number");
}

// task no: (3)
var num1 = Number(prompt("Enter the first number:"));
var num2 = Number(prompt("Enter the second number:"));


if (num1 > num2) {
    alert(num1 + " is greater than " + num2);
} else if (num2 > num1) {
    alert(num2 + " is greater than " + num1);
} else {
    alert("Both numbers are equal");
}


// task no: (4)
var correctPassword = "12345";

var userPassword = prompt("Enter your password:");
if (userPassword === correctPassword) {
    alert("Access granted");
} else {
    alert("Access denied");
}

// task no: (5)
var value1 = Number(prompt("Enter first value:"));
var value2 = Number(prompt("Enter second value:"));

// Loose equality ==
alert(value1 + " == " + value2 + " → " + (value1 == value2));

// // Strict equality ===
alert(value1 + " === " + value2 + " → " + (value1 === value2));

// // Loose inequality !=
alert(value1 + " != " + value2 + " → " + (value1 != value2));

// // Strict inequality !==
alert(value1 + " !== " + value2 + " → " + (value1 !== value2));
// ============ If Statement and Comparison Operators: tasks end ==============

// Tasks End
// ===== Completed Assignments — Hassan Javed =====