//1-Count vowel , consonent and space in string
// let str = "I love JavaScript";
// let vowelCount = 0;
// let consonetCount = 0;
// let spaceCount = 0;
// for (let i = 0; i < str.trim().toUpperCase().length; i++) {
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
//       consonetCount++;
//     }
//   } else {
//     spaceCount++;
//   }
// }
// console.log(`vowel count=> ${vowelCount}`);
// console.log(`consonent count=> ${consonetCount}`);
// console.log(`space count=> ${spaceCount}`);

//2-Remove space form string
// let str = "I love JavaScript";
// let remSpace = str.replaceAll(" ", "");
// console.log(remSpace);

//3 Reverse a string
// let str = "Kobe Bryant";
// let revStr = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   revStr = revStr + str[i];
// }
// console.log(str);
// console.log(revStr);

//4 Check Palindrome
// let str = "madam";
// let revStr = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   revStr = revStr + str[i];
// }
// str == revStr? console.log(`${str} is Palindrome`): console.log(`${str} is not a palindrome`);

// 5 Count each Character
// let str = "banana ajeri faorie ";
// for (let i = 0; i < str.toLowerCase().length; i++) {
//   let count = 0;
//   for (let j = 0; j < str.toLowerCase().length; j++) {
//     if (str[j] != " " && str[i] != " ") {
//       if (str[i] == str[j]) {
//         count++;
//       }
//     }
//   }
//   if (str[i] != " ") {
//     console.log(`${str[i]} occur ${count} times`);
//   }
// }

// 6 Most Frequent Character
// let str = "banana ajeri faorie ";
// let count = 0;
// let feqCount = 0;
// let char = "";
// for (let i = 0; i < str.toLowerCase().length; i++) {
//   for (let j = 0; j < str.toLowerCase().length; j++) {
//     if (str[j] != " " && str[i] != " ") {
//       if (str[i] == str[j]) {
//         count++;
//       }
//     }
//   }
//   if (str[i] != " ") {
//     if (count > feqCount) {
//       feqCount = count;
//       char = str[i];
//     }
//     count = 0;
//   }
// }
// console.log(`most freqent char ${char} is ${feqCount} times. `);

//7-Capitalize First Letter
// let str = "hello i am here";
// let word = str.split(" ");
// let ans = "";
// for (let i = 0; i < word.length; i++) {
//   let firstword = word[i][0].toUpperCase();
//   let remWord = word[i].slice(1);
//   ans = ans + firstword + remWord + " ";
// }
// console.log(ans);

//8-Repeat string
// let str = prompt(`enter a string`);
// let count = +prompt(`number of times you want to print the particular word`);
// let ans = "";
// for (let i = 0; i < count; i++) {
//   ans = ans + str + " ";
// }
// console.log(ans);

//9-Reverse Word
// let str = "JS is very famous";
// let word = str.split(" ");
// let ans = "";
// for (let i = word.length - 1; i >= 0; i--) {
//   ans = ans + word[i] + " ";
// }
// console.log(ans);

//10-Longest Word
//Method 1
// let str = "I love Programming and coding Accomplishments";
// let count = 0;
// let lrgWordCount = 0;
// let lrgWord = "";
// let currentWord = "";
// for (let i = 0; i < str.length; i++) {
//   if (str[i] != " ") {
//     count++;
//     currentWord = currentWord + str[i];
//   } else {
//     if (count > lrgWordCount) {
//       lrgWordCount = count;
//       lrgWord = currentWord;
//     }
//     count = 0;
//     currentWord = "";
//   }
// }

// *check for last word if it is the largest
// if (count > lrgWordCount) {
//   lrgWordCount = count;
//   lrgWord = currentWord;
// }
// console.log(`largest word ${lrgWord} and it has ${lrgWordCount} letters.`);

//Method 2
// let str = "I love Programming and coding Accomplishments";
// let word = str.split(" ");
// let maxWord = 0;
// let largestWord = "";
// for (let i = 0; i < word.length; i++) {
//   if (word[i].length > maxWord) {
//     maxWord = word[i].length;
//     largestWord = word[i];
//   }
// }
// console.log(
//   `largest word in ${str} is ${largestWord} with ${maxWord} letters.`,
// );

//11 - Anagram
//Method 1
// let str = "listen";
// let str2 = "silent";
// let isAnagram = true;
// for (let i = 0; i < str.length; i++) {
//   let count = 0;
//   for (let j = 0; j < str2.length; j++) {
//     if (str[i] == str2[j]) {
//       count++;
//     }
//   }
//   if (count !== 1) {
//     isAnagram = false;
//   }
// }
// if (isAnagram) {
//   console.log(`${str} is anagram.`);
// } else {
//   console.log(`${str} is not anagram`);
// }
//Method 2
// let a = "listen";
// let b = "silent";
// let isFound = false;
// for (let i = 0; i < b.length; i++) {
//   if (a.includes(b[i])) {
//     isFound = true;
//   } else {
//     isFound = false;
//     break;
//   }
// }

// if (isFound) {
//   console.log(`${a} and ${b} are anagram `);
// } else {
//   console.log(`${a} and ${b} are Not anagram `);
// }
