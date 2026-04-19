// 🟢 Level 1 — Basic Variable Practice

// (Simple, just to get comfortable)

// Create a variable to store your name, age, and city, then print them in one sentence.
// let myName = "sohail";
// let age = 20;
// let city = "raniganj";
// console.log(`Name = ${myName} , Age = ${age} , City = ${city}`);

// Store two numbers in variables and print:
// their sum
// their difference
// their product
// let num1 = 10;
// let num2 = 20;
// let add = num1 + num2;
// let sub = num1 - num2;
// let product = num1 * num2;
// console.log(`Sum of ${num1} and ${num2} is ${add}`);

// Create a variable for your favorite number and check its type using typeof.
// let a = 10;
// console.log(a);
// console.log(typeof a);

// Store a string "100" and a number 100. Print both and observe the difference.
// let str = "100";
// let num = 100;
// console.log(str);
// console.log(num);

// 🟡 Level 2 — Thinking with Variables

// Swap two variables:
// let a = 10;
// let b = 20;
// let temp = a;
// a = b;
// b = temp;
// console.log(a);
// console.log(b);

// Store a price and quantity, then calculate total cost.
// let price = 1000;
// let quantity = 10;
// let totalCost = price * quantity;
// console.log(totalCost);

// Create a variable marks = 85
// 👉 Print: "You scored 85 marks"
// let marks = 85;
// console.log("You scored", marks, "marks.");

// Store a boolean value (true/false) and print a message based on it (just manually, no conditions yet).
// let bool =true;
// console.log(bool)
// 🟠 Level 3 — Real-Life Logic

// Create variables:
// productName
// price
// discount
// 👉 Calculate final price after discount
// let productName = "Shoes";
// let price = 4000;
// let discount = 20;
// let finalPrice = price - (discount * price) / 100;
// console.log(
//   `Final Price of ${productName} after ${discount}% discount is ${finalPrice}`,
// );

// Store your birth year and calculate your current age.
// let birth = 2000;
// let currentAge = 2026 - birth;
// console.log("Your current Age is ", currentAge);

// Create 3 variables for subjects' marks and calculate the average.
// let maths = 99;
// let phy = 94;
// let chem = 96;
// let avg = (maths + phy + chem) / 3;
// console.log("Average is ", avg);

// Convert temperature:
// Celsius → Fahrenheit
// (Hint: (C * 9/5) + 32)
// let temp = 45;
// let fh = temp * (9 / 5) + 32;
// console.log(`Temperature ${temp}°C in Fahrenheit is ${fh}`);

// 🔴 Level 4 — Slightly Challenging (Important)
// What will be the output?
// let a = 5;
// let b = "5";
// console.log(a + b);//55 string

// Predict output:
// let x;
// console.log(x);//undefined

// Predict output:
// let a = null;
// console.log(typeof a);//object

//🔴 Practice set 2
// Swap WITHOUT using third variable
// let a = 10;
// let b = 20;
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(`${a} and ${b}`);

// Convert minutes → seconds
// let minutes = 5;
// Output: 300

// let min = 10;
// let toSec = min * 60;
// console.log(toSec);

// Simple Interest
// let p = 1000;
// let r = 5;
// let t = 2;
// let simpleIntrest=(p * r * t) / 100
// console.log(simpleIntrest)

// Check Even or Odd
// let num = 55;
// if (num % 2 === 0) {
//   console.log(`${num} is even`);
// } else {
//   console.log(`${num} is even`);
// }

// Total bill with GST
// let price = 1000;
// let gst = 18;
// Final price = ?

// let price = 1000;
// let gst = 18;
// let finalPrice = price + (gst*price)/100;
// console.log(`Final price = ${finalPrice}`)

// 🟢 Level 1 — Basic Arithmetic
// let a = 12;
// let b = 5;
// 👉 Find:
// a + b
// a - b
// a * b
// a / b
// a % b

// let a = 12;
// let b = 5;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

// let x = 20;
// let y = 3;
// 👉 Calculate:
// quotient
// remainder

// let x = 20;
// let y = 3;
// let quotient = 20 / 3;
// let rem = 20 % 3;
// console.log(quotient);
// console.log(rem);

// let num = 10;
// num = num + 5;
// num = num * 2;
// 👉 Final value?

// let num = 10;
// num = num + 5;
// num = num * 2;
// console.log(num);//30

// 🟡 Level 2 — Pre & Post Increment Basics

// let x = 5;
// console.log(x++);//5
// console.log(x);//6

// let x = 5;
// console.log(++x);//6
// console.log(x);//6

// let a = 10;
// let b = a++;
// 👉 Final values of a and b?
// let a = 10;
// let b = a++;
// console.log(`${a} and ${b}`)//11 10

// let a = 10;
// let b = ++a;
// 👉 Final values?
// let a = 10;
// let b = ++a;
// console.log(`${a} and ${b}`)//11 11
 
// 🟠 Level 3 — Mixed Thinking
// let x = 5;
// let y = x++ + 2;
// 👉 Final values of x and y?
// console.log(`${x} and ${y}`)// 6 7

// let x = 5;
// let y = ++x + 2;
// 👉 Final values of x and y?
// console.log(`${x} and ${y}`)// 6 8

// let a = 3;
// let b = 2;
// let c = a++ * ++b;
// 👉 Find a, b, c
// console.log(`${a} , ${b} and ${c}`)// 4 3 9

// 🔴 Level 4 — Tricky (Important)
// let x = 10;
// let y = x++ + ++x;
// console.log(`${x} and ${y}`)//12 22

// let x = 5;
// let y = x++ + x++ + ++x;//5 6 8
// console.log(`${x} and ${y}`)//8 19

// let a = 1;
// let b = a++ + ++a + a++;//1 + 3 + 3 
// console.log(`${a} and ${b}`)//4 7

// 🟢 Level 1 — Pure Concatenation
// console.log("Hello" + "World");//HelloWorld
// console.log("Age: " + 20);//Age: 20
// console.log(10 + "20");//1020
// console.log("10" + 20 + 30);//102030
// console.log(10 + 20 + "30");//3030

// 🟡 Level 2 — Type Coercion Starts
// console.log("5" - 2);//3
// console.log("5" * 2);//10
// console.log("5" / 2);//2.5
// console.log("5" + 2 * 3);//56
// console.log(("5" + 2) * 3);//156

// 🟠 Level 3 — Boolean + Null + Undefined
// console.log(true + 1);//2
// console.log(false + 1);//1
// console.log(null + 1);//1
// console.log(undefined + 1);//NaN
// console.log("5" + true);//5true

// 🔴 Level 4 — Real Tricky (Interview Type)
// console.log([] + []);//array are converted to string here array is empty 
// console.log([] + {});//khali array means khali string and {} means object
// console.log({} + []);
// console.log([1,2] + [3,4]);
// console.log("10" - "2" + "5");//85