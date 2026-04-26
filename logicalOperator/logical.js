//And(&&) operator-find false value if any one condition false the output is false
// console.log(true && true);//true
// console.log(true && true && true);//true
// console.log(true && true && true && false);//false

//OR(||) operator-find true value if any one condition true the output is true
// console.log(true || true); //true
// console.log(true || true || true); //true
// console.log(true || true || true || false); //true
// console.log(false || false || false || true); //true
// console.log(false || false || false || false); //false-if whole condition is false then only return false.

//NOT(!)Operator - change ture condition to false condition and  change false condition to true condition
// console.log(!true); //false
// console.log(!false); //true
// console.log(!(false || false || false || true)); //false
// console.log(!(false || false || false || false)); //true

// 1️⃣
// console.log(5 > 3 && 10 > 5);//true

// 2️⃣
// console.log(5 > 3 && 10 < 5);//false

// 3️⃣
// console.log(5 < 3 || 10 > 5);//true

// 4️⃣
// console.log(!(5 > 3));//false

// 5️⃣
// let age = 20;
// console.log(age >= 18 && age <= 60);//true

// 6️⃣
// let username = "";
// let password = "1234";
// console.log(username && password);//false

// ⚠️ This one is tricky.
// Logical operators don’t always return true/false in JS 😈

// 7️⃣
// console.log(0 || "Hello");//hello

// 8️⃣
// console.log("Hi" && 0);//0

// 🧠 Mini Challenge
// Take age from user.
// If age is:
// greater than 18
// AND less than 60
// Print:
// You can work
// Else:
// Not eligible for work

// let age = +prompt("Enter your age ");
// if (age > 18 && age < 60) {
//   console.log("You can work");
// } else {
//   console.log("Not eligible for work");
// }

// What is the output?
// 1️⃣
// console.log("Hello" && 0 && "JS");//0

// 2️⃣
// console.log("Hello" || 0 || "JS");//Hello

// 3️⃣
// console.log(null && "JS");//it print null 

// 4️⃣
// This one requires understanding of short-circuiting.
// console.log(undefined || 0 || false || "Done");//Done

// 5️⃣
// console.log(5 && 2 && 0 && 8);//0

// 6️⃣
// console.log(5 || 2 || 0 || 8);//5

// 🔥 Bonus Brain Twister
// 7️⃣
// let value = "";
// console.log(value || "Default");//Default

// 8️⃣
// let value = "Affan";
// console.log(value && "Welcome"); // Welcome

// 💣 Final Boss
// 9️⃣
// console.log("" && "JS" || "React");//React
// This one mixes both && and ||.
// Operator precedence matters 😈
// (Hint: && runs before ||)