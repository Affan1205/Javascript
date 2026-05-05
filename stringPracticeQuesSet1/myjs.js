// 1️⃣ Print each character of a string
// Example:
// Input: "hello"
// Output:
// h
// e
// l
// l
// o
// let str = "hello";
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

// 2️⃣ Count characters in a string (without using .length)
// Example:
// Input: "javascript"
// Output: 10
// let str = "javascript is amazing language";
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//   if (str[i] != " ") {
//     count++;
//   }
// }
// console.log(`total character in ${str} is ${count}`);

// 3️⃣ Reverse a string
// Example:
// Input: "hello"
// Output: "olleh""
// let str = "hello";
// let revStr = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   revStr = revStr + str[i];
// }
// console.log(str);
// console.log(revStr);

// 4️⃣ Convert string to uppercase without using .toUpperCase()
// let str = "hello how are you";
// let str = "198" - "89";
// console.log(str);

// 5️⃣ Count vowels in a string
// Example:
// Input: "javascript"
// Output: 3
// (vowels = a, e, i, o, u)
// let str = "jAvascript";
// let lowStr = str.trim().toLowerCase();
// let vowelCount = 0;
// for (let i = 0; i < lowStr.length; i++) {
//   if (
//     lowStr[i] == "a" ||
//     lowStr[i] == "e" ||
//     lowStr[i] == "i" ||
//     lowStr[i] == "o" ||
//     lowStr[i] == "u"
//   ) {
//     vowelCount++;
//   }
// }
// console.log(`${vowelCount}`);

// 6️⃣ Remove all spaces from a string
// Example:
// Input: "hello world js"
// Output: "helloworldjs"
// let str = "hello world js";
// let remSpace = "";
// for (let i = 0; i < str.length; i++) {
//   if (str[i] != " ") {
//     remSpace = remSpace + str[i];
//   }
// }
// console.log(str);
// console.log(remSpace);

// 7️⃣ Count how many times a character appears
// Example:
// Input: "banana", find "a"
// Output: 3
// let str = "banana";
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//   if (str[i] == "a") {
//     count++;
//   }
// }
// console.log(str);
// console.log(count);

// 8️⃣ Check if string is palindrome
// Example:
// "madam" → Palindrome
// "hello" → Not palindrome
// let str = "madam";
// let revStr = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   revStr = revStr + str[i];
// }
// if (revStr == str) {
//   console.log(`${str} is Palindrome.`);
// } else {
//   console.log(`${str} is not Palindrome.`);
// }

// 9️⃣ Find longest word in a sentence
// Example:
// Input: "I am learning javascript"
// Output:
// javascript
// let str = "I am llearninglearningearning javascript";
// let lngstr = "";
// let count = 0;
// let maxWordCount = 0;
// for (let i = 0; i < str.length; i++) {
//   if (str[i] != " ") {
//     count++;
//     if (count > maxWordCount) {
//       maxWordCount = count;
//     }
//   } else {
//     count = 0;
//   }
// }
// console.log(`max word count in ${str} is => ${maxWordCount}`);

// 🔟 Capitalize first letter of each word
// Example:
// Input: "hello world javascript"
// Output:
// Hello World Javascript

// ⭐ Small Challenge (Good for Grip)
// Count:
// vowels
// consonants
// spaces
// Example:
// Input: "hello world"
// Output:
// vowels: 3
// consonants: 7
// spaces: 1
// let str = "hello world";
// let vowelCount = 0;
// let consonantCount = 0;
// let spaceCount = 0;
// for (let i = 0; i < str.trim().toLowerCase().length; i++) {
//   if (str[i] != " ") {
//     if (
//       str[i] == "a" ||
//       str[i] == "e" ||
//       str[i] == "i" ||
//       str[i] == "o" ||
//       str[i] == "u"
//     ) {
//       vowelCount++;
//     } else {
//       consonantCount++;
//     }
//   } else {
//     spaceCount++;
//   }
// }
// console.log(`vowel count ${vowelCount}`);
// console.log(`consonant count ${consonantCount}`);
// console.log(`space count ${spaceCount}`);
