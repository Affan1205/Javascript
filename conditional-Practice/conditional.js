// 1️⃣
// Write a program:
// If number is positive → print "Positive Number"
// let num = 10;

// let num = +prompt("Enter a number");
// if(num >0){
//     console.log(`${num} is positive.`)
// }
// 2️⃣
// If temperature is greater than 30 → print "Hot"
// let temp = 35;

// let temprature =+prompt("Enter the current temprature of you environment");
// if(temprature>30){
//     console.log("Hot");
// }

// 🟢 Level 2 – if...else
// 3️⃣
// Check if a number is even or odd.
// let num = 7;

// let num = +prompt("Enter number");
// if(num%2 == 0){
//     console.log(`${num} is even.`)
// }
// else{
//     console.log(`${num} id odd`)
// }

// 4️⃣
// Check if a person can vote (age >= 18)
// let age = 16;

// let age = +prompt("Enter your age");
// if (age >= 18) {
//   console.log("You can vote");
// } else {
//   console.log("You cannot vote.");
// }

// 🟢 Level 3 – if...else if...else
// 5️⃣
// Grading system:
// 90+ → A
// 75+ → B
// 50+ → C
// Below 50 → Fail
// let marks = 82;

// let marks = +prompt("Enter your marks");
// if (marks >= 90) {
//   console.log("A");
// } else if (marks >= 75) {
//   console.log("B");
// } else if (marks >= 50) {
//   console.log("C");
// } else {
//   console.log("Fail");
// }

// 6️⃣
// Check number:
// If > 0 → Positive
// If < 0 → Negative
// Else → Zero
// let num = 0;

// let num =+prompt("Enter input");
// if(num>0){
//     console.log(`${num} is positive.`)
// }
// else if(num <0){
//     console.log(`${num} is negative`)
// }
// else{
//     console.log("zero")
// }

// 🟢 Level 4 – Ternary Operator
// 7️⃣
// Using ternary:
// If age >= 18 → "Adult" else "Minor"
// let age = 20;

// let age = +prompt("Enter your age");
// let result = age >= 18 ? "Adult" : "Minor";
// console.log(result);

// 8️⃣
// Using ternary:
// Check if number is divisible by 5.
// let num = 25;

// let num = +prompt("Enter a number");
// let result =
//   num % 5 == 0 ? `${num} is divisible by 5` : `${num} is not divisible by 5`;
// console.log(result);

// 🟢 Level 5 – Switch
// 9️⃣
// Print day name:
// 1 → Monday
// 2 → Tuesday
// 3 → Wednesday
// Else → Invalid
// let day = 2;

// let day = +prompt("Enter day number");
// switch (day) {
//   case 1:
//     console.log("Mon");
//     break;
//   case 2:
//     console.log("Tue");
//     break;
//   case 3:
//     console.log("Wed");
//     break;
//   case 4:
//     console.log("Thru");
//     break;
//   case 5:
//     console.log("Fri");
//     break;
//   case 6:
//     console.log("Sat");
//     break;
//   case 7:
//     console.log("Sun");
//     break;
//   default:
//     console.log("Invalid");
// }

// 🔥 Final Boss
// 🔟
// Take a number.
// If:
// Divisible by 3 → print "Fizz"
// Divisible by 5 → print "Buzz"
// Divisible by both → print "FizzBuzz"
// Else → print number
// let num = 15;

// let num = +prompt("Enter an number");
// if (num % 3 == 0 && num % 5 == 0) {
//   console.log("FizzBuzz");
// } else if (num % 3 == 0) {
//   console.log("Fizz");
// } else if (num % 5 == 0) {
//   console.log("Bizz");
// } else {
//   console.log(num);
// }

// 🧠 Problem 1 – Smart Login System
// Take 3 inputs:
// let username;
// let password;
// let isLoggedIn;
// Rules:
// If username AND password are empty →
// 👉 Print "Please enter credentials"
// If username is "admin" AND password is "1234" →
// 👉 Print "Login Successful"
// If username is correct but password is wrong →
// 👉 Print "Wrong Password"
// Else →
// 👉 Print "Invalid User"
// ⚠ You must use:
// logical operators (&&, ||)
// proper if-else if

// let username = prompt("Enter your username");
// let password = prompt("Enter your password");
// let isLoggedIn;
// if (username == "" && password == "") {
//   console.log("Please enter your credentials");
// } else if (username == "admin" && password == "1234") {
//   console.log("Login Successful");
// } else if (username == "admin" && password != "1234") {
//   console.log("Wrong Password");
// } else {
//   console.log("Invalid User");
// }

// 🔥 Problem 2 – Discount Calculator
// Take:
// let amount;
// let isMember;
// Rules:
// If amount ≥ 5000 AND member → 20% discount
// If amount ≥ 5000 AND NOT member → 10% discount
// If amount < 5000 → No discount
// Print final amount after discount.

// let amount = +prompt("enter the amount");
// let isMember = prompt("Are you member or not");
// if (amount >= 5000 && isMember == "yes") {
//   console.log(
//     `You got 20% discount and final amount after discount is ${amount - (20 / 100) * amount}`,
//   );
// } else if (amount >= 5000 && isMember == "no") {
//   console.log(
//     `You got 10% discount and final amount after discount is ${amount - (10 / 100) * amount}`,
//   );
// } else {
//   console.log(`final amount is ${amount}`);
// }

// 🔥 Final Brain Test (Important)
// 🧠 Problem 3 – Number Analyzer
// Take a number.
// Print:
// "Positive Even"
// "Positive Odd"
// "Negative Even"
// "Negative Odd"
// "Zero"

// let num = +prompt("Enter a number: ");
// if (num == 0) {
//   console.log("Zero");
// }
// else if(num >0){
//     if(num%2==0){
//         console.log(`${num} is Positive Even`);
//     }
//     else{
//         console.log(`${num} is Positive odd`);
//     }
// }
// else if(num <0){
//     if(num%2==0){
//         console.log(`${num} is Negative Even`);
//     }
//     else{
//         console.log(`${num} is Negative odd`);
//     }
// }

// 🟢 Level 1 — Basic Nesting

// let age = 20;
// let hasID = true;
// 👉 If age ≥ 18
//   👉 then check hasID
//     → print "Allowed"
//     → else "ID Required"
// 👉 else → "Underage"
// let age = +prompt("Enter age");
// let hasID = prompt("Do you have Id?(true or false");
// if (age >= 18) {
//   if (hasID == "true") {
//     console.log("Allowed");
//   } else {
//     console.log("ID Required.");
//   }
// } else {
//   console.log("You are UnderAge.");
// }

// let num = 10;
// 👉 If number is positive
//   👉 check even or odd
// 👉 else → print "Not positive"
// let num = +prompt("Enter number");
// if (num === 0) {
//   console.log("Neither Positive or Negative.");
// } else if (num > 0) {
//   if (num % 2 == 0) {
//     console.log(`${num} is Even Positive.`);
//   } else {
//     console.log(`${num} is Odd Positive.`);
//   }
// } else {
//   console.log(`${num} is Negative.`);
// }

// let marks = 80;
// 👉 If marks ≥ 50
//   👉 check:
// ≥ 75 → "Distinction"
// else → "Pass"
// 👉 else → "Fail"
// let marks = +prompt("Enter you final term marks.");
// if (marks >= 50) {
//   if (marks >= 75) {
//     console.log("Pass with Distinction.");
//   } else {
//     console.log("Pass.");
//   }
// } else {
//   console.log("Fail! Try Again");
// }

// 🟡 Level 2 — Decision Flow (Important)
// let username = "admin";
// let password = "1234";
// 👉 If username is correct
//   👉 then check password
//     → "Login Success"
//     → else "Wrong Password"
// 👉 else → "User not found"
// let userName = prompt("Enter username.");
// if (userName === "admin321") {
//   let password = prompt("Enter password."); //Ask Password when user name is correct.
//   if (password === "qwerty786") {
//     console.log("Login Successful.");
//   } else {
//     console.log("Invalid Password.");
//   }
// } else {
//   console.log("User Not found");
// }

// let amount = 1200;
// let isMember = true;
// 👉 If amount > 1000
//   👉 if member → extra 10% discount
//   👉 else normal discount
// 👉 else → no discount
// let amount = +prompt("Enter amount");
// let isMember = prompt("Are you Member?(yes or no)");
// let discount = +prompt("Enter discount");
// if (amount > 1000) {
//   if (isMember === "yes") {
//     console.log(
//       `You got 10% extra discount on ${discount} % i.e ${discount + 10 } % and final amount to pay ${amount - (amount * (discount + 10)) / 100}`,
//     );
//   } else {
//     console.log(`final amount to pay ${amount - (amount * discount) / 100}`);
//   }
// } else {
//   console.log(`final amount ${amount}`);
// }

// let temp = 35;
// let isRaining = true;
// 👉 If temp > 30
//   👉 if raining → "Humid"
//   👉 else → "Hot"
// 👉 else → "Pleasant"
// let temp = +prompt("Enter temp nearby");
// let isRaining = prompt("Is Raining (yes or no)");
// if (temp > 30) {
//   if (isRaining === "yes") {
//     console.log("Humid.");
//   } else {
//     console.log("Hot");
//   }
// } else {
//   console.log("Pleasent.");
// }

// 🟠 Level 3 — Real Logic Building
// Leap Year (Nested way)
// let year = 2024;
// 👉 Use nested conditions (not single line)
// let year = +prompt("Enter a year");
// if (year % 4 === 0) {
//   if (year % 100 != 0) {
//     console.log("Leap Year.");
//   } else {
//     console.log("Not a Leap year.");
//   }
// } else if (year % 400 === 0) {
//   console.log("leap year");
// } else {
//   console.log("Not a leap year.");
// }

// let a = 10, b = 20, c = 15;
// 👉 Find largest using nested if
// let a = 10,
//   b = 20,
//   c = 15;
// if (a >= b) {
//   if (a >= c) {
//     console.log(`${a} is largest.`);
//   }
// } else if (b >= a) {
//   if (b >= c) {
//     console.log(`${b} is largest.`);
//   }
// } else {
//   console.log(`${c} is largest.`);
// }

// let score = 85;
// let attendance = 70;
// 👉 If score ≥ 50
//   👉 if attendance ≥ 75 → "Pass"
//   👉 else → "Low Attendance"
// 👉 else → "Fail"
// let score = +prompt("Enter score");
// if (score >= 50) {
//   let attendance = +prompt("Enter attendence");
//   if (attendance >= 75) {
//     console.log("Pass");
//   } else {
//     console.log("Low Attendence");
//   }
// } else {
//   console.log("Fail");
// }

// 🔴 Level 4 — Interview Style
// ATM Simulation
// let balance = 5000;
// let withdraw = 2000;
// 👉 If withdraw ≤ balance
//   👉 if withdraw % 100 === 0 → allow
//   👉 else → "Enter valid amount"
// 👉 else → "Insufficient balance"

// let balance = +prompt("Enter balance");
// let withdraw = +prompt("Enter amount to withdraw");
// if (withdraw <= balance) {
//   if (withdraw % 100 === 0) {
//     console.log(`You withdraw ${withdraw} amount and now ${balance - withdraw} amount left.`);
//   } else {
//     console.log("Enter valid amount.");
//   }
// } else {
//   console.log("Insufficient Balance.");
// }

// Triangle Type
// let a = 5, b = 5, c = 5;
// 👉 First check valid triangle
// 👉 Then:
// all equal → Equilateral
// two equal → Isosceles
// all diff → Scalene
// let a = 5,
//   b = 5,
//   c = 5;
// if (a + b > c && b + c > a && a + c > b) {
//   if (a === b && b === c && c === a) {
//     console.log("Equilateral Triangle.");
//   } else if (a === b || b === c || c === a) {
//     console.log("Isosceles Triangle.");
//   } else if (a !== b && b !== c && c !== a) {
//     console.log("Scalene");
//   }
// } else {
//   console.log("Invalid Triangle");
// }

// Login + Role Check
// let user = "admin";
// let password = "1234";
// let role = "editor";
// 👉 If login correct
//   👉 if role = admin → "Full Access"
//   👉 else → "Limited Access"
// 👉 else → "Login Failed"
// let userName = prompt("Enter user name");
// if (userName === "qwerty321") {
//   let password = prompt("Enter password");
//   if (password === "qwertyBhai123") {
//     let role = prompt("Enter your role");
//     if (role === "main") {
//       console.log("You got full access.");
//     } else {
//       console.log("Yor got Limited access.");
//     }
//   } else {
//     console.log("Wrong Password.");
//   }
// } else {
//   console.log("User Not found");
// }

// ⚡ Level 5 — Advanced Thinking
// let num = 15;
// 👉 If divisible by 3
//   👉 if divisible by 5 → "FizzBuzz"
//   👉 else → "Fizz"
// 👉 else
//   👉 if divisible by 5 → "Buzz"
//   👉 else → "Number"

// let num = +prompt("Enter number");
// if (num % 3 === 0) {
//   if (num % 5 === 0) {
//     console.log("FizzBuzz");
//   } else {
//     console.log("Fizz");
//   }
// } else {
//   if (num % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(num);
//   }
// }

// let age = 25;
// let salary = 30000;
// let creditScore = 700;
// 👉 Loan approval:
// age ≥ 21
//   👉 salary ≥ 25000
//     👉 creditScore ≥ 650 → Approved
//     👉 else → Low Credit
//   👉 else → Low Salary
// else → Not Eligible
// let age = +prompt("Enter your Age.");
// if (age >= 21) {
//   let salary = +prompt("Enter your salary");
//   if (salary >= 25000) {
//     let creditScore = +prompt("Enter your credit score");
//     if (creditScore >= 650) {
//       console.log("Loan Approved.");
//     } else {
//       console.log("Low Credit");
//     }
//   } else {
//     console.log("Low Salary.");
//   }
// } else {
//   console.log("Not Eligible for loan.");
// }

// let balance = +prompt("Enter the amount");
// let pin = +prompt("Enter pin");
// if (pin === 1234) {
//   while (true) {
//     let menu = +prompt("Enter 1.check Balance 2.Deposit 3.withdraw 4.Exit");
//     if (menu === 1) {
//       console.log(`Your balance is ${balance}`);
//     } else if (menu === 2) {
//       let deposit = +prompt("Enter amount to deposit");
//       if (deposit > 0) {
//         balance += deposit;
//         console.log(`Balance ${balance}`);
//       } else {
//         console.log(`Invalid Input`);
//       }
//     } else if (menu === 3) {
//       let withdraw = +prompt("enter amount to withdraw");
//       if (withdraw > 0) {
//         if (withdraw <= balance) {
//           if (withdraw % 100 === 0) {
//             balance = balance - withdraw;
//             console.log(`success !!!current Balance ${balance}`);
//           } else {
//             console.log(`Enter amount multiple of 100`);
//           }
//         } else {
//           console.log("Insufficient Balance");
//         }
//       } else {
//         console.log("Invalid Amount");
//       }
//     } else if (menu === 4) {
//       console.log(`Thankyou for using ATM`);
//       break;
//     } else {
//       console.log("Invalid Input");
//     }
//   }
// } else {
//   console.log("Invalid Pin.");
// }
