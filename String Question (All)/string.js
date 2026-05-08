// 🟢 PHASE 1 — Beginner (Tool Familiarity)
// 👉 Goal: Learn basic string operations
// 👉 Rule: ✅ Built-in methods ALLOWED

// 1. Basic Info
// let str = "JavaScript";
// 👉 Print:
// length
// first character
// last character

// let str = "JavaScript";
// console.log(`Length of ${str} is ${str.length}`);
// console.log(`First character = ${str[0]}`);
// console.log(`Last character = ${str[str.length - 1]}`);

// 2. Case Conversion
// let str = "hello";
// 👉 Convert to:
// UPPERCASE
// lowercase

// let str = "hello";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// 3. Trim Spaces
// let str = "  hello world  ";
// 👉 Remove spaces from start & end
// let str = "  hello world  ";
// console.log(str.trim());

// 4. Extract Substring
// let str = "JavaScript";
// 👉 Extract "Script"

// let str = "JavaScript";
// console.log(str.substring(4,10));
// console.log(str.substring(str.length - 1 - 5, str.length));

// 5. String → Array
// let str = "apple,banana,mango";
// 👉 Convert into array

// let str = "apple,banana,mango";
// let arr = str.split(",");
// console.log(arr);

// 6. Search in String
// let str = "hello world";
// 👉 Check if "world" exists

// let str = "hello world";
// console.log(str.includes("world"));

// 🟡 PHASE 2 — Intermediate (Logic Building)
// 👉 Goal: Think without shortcuts
// 👉 Rule: ❌ Built-ins NOT allowed (unless mentioned)

// 7. Reverse String
// "hello" → "olleh"

// let str = prompt("Enter a string");
// let revStr = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   revStr = revStr + str[i];
// }
// console.log(`Reverse of ${str} is => ${revStr}`);

// 8. Palindrome Check
// "madam" → true
// "hello" → false

//Todo - This is solution works but here we reverse full string
//Method 1
// let str = prompt("Enter a string");
// let revStr = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   revStr = revStr + str[i];
// }
// console.log(`Reverse of ${str} is => ${revStr}`);
// if (revStr === str) {
//   console.log(`Yes ${str} is Palindrome.`);
// } else {
//   console.log(`No ${str} is Palindrome.`);
// }

//Todo -> Optimal solution
//Method 2
// let str = prompt("enter a string");
// let isPalindrome = true;
// for (let i = 0; i < str.length / 2; i++) {
//   if (str[i] !== str[str.length - 1 - i]) {
//     isPalindrome = false;
//     break;
//   }
// }
// if (isPalindrome) {
//   console.log(`${str} is palindrome.`);
// } else {
//   console.log(`${str} is not a palindrome.`);
// }

// 9. Count Vowels
// "javascript" → 3

// let str = prompt("Enter a string").toLowerCase();
// let countVowel = 0;
// for (let i = 0; i < str.length; i++) {
//   if (
//     str[i] === "a" ||
//     str[i] === "e" ||
//     str[i] === "i" ||
//     str[i] === "o" ||
//     str[i] === "u"
//   ) {
//     countVowel++;
//   }
// }
// console.log(`Vowel count in ${str} => ${countVowel}`);

// 10. Count Words
// "Hello world guys" → 3
// 👉 ⚠️ You MAY use split()
// 👉 🔥 Try WITHOUT it also

// Todo - use of /\s/
// In JavaScript, /\s/ is a Regular Expression (regex) that stands for "any whitespace character."
// It is a shorthand character class used to find spaces, tabs, and line breaks within a string.
// Here is a breakdown of what the individual parts mean:
// / /: The forward slashes are delimiters that tell JavaScript you are writing a regular expression literal.
// \s: The lowercase "s" is the metacharacter specifically for whitespace.
// According to the MDN Web Docs, it matches:
// A standard space ( )
// A horizontal tab (\t)
// A vertical tab (\v)A form feed
// (\f)A line feed or newline (\n)
// A carriage return (\r)

// let str = prompt("Enter a string");
// let ans = str.trim().split(/\s+/);
// console.log(ans);
// console.log(ans.length);

// 11. Remove All Spaces
// "hello world" → "helloworld"
// 👉 ⚠️ You MAY use replace() or loop

// 1st way
// let str = prompt("Enter a string");
// let ans = "";
// for (let i = 0; i < str.length; i++) {
//   if (str[i] !== " ") {
//     ans = ans + str[i];
//   }
// }
// console.log(ans);

// 2nd way//Todo good way
// let str = prompt("Enter a string");
// let ans = str.replaceAll(/\s+/, "");
// console.log(ans);

// 12. First Non-Repeating Character
// "swiss" → "w"
// let str = prompt("Enter a string");
// for (let i = 0; i < str.length; i++) {
//   let count = 0;
//   for (let j = 0; j < str.length; j++) {
//     if (str[i] === str[j]) {
//       count++;
//     }
//   }
//   if (count === 1) {
//     console.log(`${str[i]} is the first non-repeating character.`);
//     break;
//   }
// }

// 🟠 PHASE 3 — Strong Intermediate

// 👉 Goal: Combine logic + methods
// 👉 Rule: ⚠️ Limited built-ins

// 13. Capitalize Each Word
// "hello world" → "Hello World"

// 👉 Allowed: split, join

// let str = "javascript is fun to learn";
// let wordList = str.split(/\s+/); //splitting string into an array
// let ans = "";
// for (let i = 0; i < wordList.length; i++) {
//   let firstChar = wordList[i][0].toUpperCase();
//   let remChar = wordList[i].substring(1, wordList[i].length);
//   ans = ans + firstChar + remChar + " ";
// }
// console.log(`${ans}`);

// 14. Toggle Case
// "HeLLo" → "hEllO"
// 👉 ❌ No built-ins

// //Todo - important space wala edge case bhi check krna ha
// const inputStr = "HeLLo jAVAsCRIPT";
// let ans = "";
// for (let i = 0; i < inputStr.length; i++) {
//   if (inputStr[i] === " ") {
//     ans = ans + " ";
//     continue;
//   } else if (inputStr[i] !== " ") {
//     if (inputStr.charCodeAt(i) >= 65 && inputStr.charCodeAt(i) <= 90) {
//       ans = ans + inputStr[i].toLowerCase();
//     } else if (inputStr.charCodeAt(i) >= 97 && inputStr.charCodeAt(i) <= 122) {
//       ans = ans + inputStr[i].toUpperCase();
//     }
//   }
// }
// console.log(ans);

// 15. Most Frequent Character
// "javascript" → "a"

//Todo - space edge case missed
// const inpStr = "javaScript is Fun ";
// let sameStr = inpStr.toLowerCase();
// let maxFreq = 0;
// let maxFreqChar = "";
// for (let i = 0; i < sameStr.length; i++) {
//   if (sameStr[i] === " ") {
//     continue;
//   } else {
//     let count = 0;
//     for (let j = 0; j < sameStr.length; j++) {
//       if (sameStr[i] === sameStr[j]) {
//         count++;
//       }
//     }
//     if (count > maxFreq) {
//       maxFreq = count;
//       maxFreqChar = sameStr[i];
//     }
//   }
// }
// console.log(
//   `Max frequent charcter is ${maxFreqChar} and it appears ${maxFreq} times.`,
// );

// 16. Anagram Check
// "listen", "silent" → true
// 👉 ⚠️ Allowed: sort
// 🔥 Bonus: do without sort

// const inpStr1 = "silent";
// const inpStr2 = "listen";
// let str1 = inpStr1.split("").sort().join("");
// let str2 = inpStr2.split("").sort().join("");
// if(str1 === str2)
//     console.log(`string are Anagram.`);

//!wrong logic -> fail for abb,abc
// const inpStr1 = "silent";
// const inpStr2 = "listen";
// let isAnagram = true;
// if (inpStr1.length === inpStr2.length) {
//   for (let i = 0; i < inpStr1.length; i++) {
//     if (inpStr2.includes(inpStr1[i])) {
//       continue;
//     } else {
//       isAnagram = false;
//       break;
//     }
//   }
//   if (isAnagram) {
//     console.log(`${inpStr1} and ${inpStr2} are Anagram.`);
//   } else {
//     console.log(`${inpStr1} and ${inpStr2} are Not Anagram.`);
//   }
// } else {
//   console.log(`${inpStr1} and ${inpStr2} are Not Anagram.`);
// }

// 17. Remove Duplicate Characters
// "programming" → "progamin"

// let str = "programming";
// let ans = "";
// for (let i = 0; i < str.length; i++) {
//   if (ans.includes(str[i])) {
//     continue;
//   } else {
//     ans = ans + str[i];
//   }
// }
// console.log(ans);

//?ese bhi likh sakte hn same baat ha ji

// let str = "programming";
// let ans = "";
// for(let i = 0 ; i<str.length;i++)
// {
//     if(!ans.includes(str[i])){
//         ans = ans + str[i];
//     }
// }
// console.log(ans);

//!this logic fail when charcter appear 3 times
// let str = "programming";
// let ans = "";
// for (let i = 0; i < str.length; i++) {
//   let count = 1;
//   for (let j = i + 1; j < str.length; j++) {
//     if (str[i] === str[j]) {
//       count++;
//     }
//   }
//   if (count === 1) {
//     ans = ans + str[i];
//   }
// }
// console.log(ans);

// 18. Longest Word
// "I love JavaScript programming"
// → "programming"

// 👉 Allowed: split

//Method 1
// const str = "I love JavaScript programming";
// let letterCount = 0;
// let lgWord = "";
// let count = 0;
// let word = "";
// for (let i = 0; i < str.length; i++) {
//   if (str[i] !== " ") {
//     count++;
//     word = word + str[i];
//   } else {
//     if (count > letterCount) {
//       letterCount = count;
//       lgWord = word;
//     }
//     count = 0;
//     word = "";
//   }
// }
// //if the last words largest
// if (count > letterCount) {
//   letterCount = count;
//   lgWord = word;
// }
// console.log(lgWord);
// console.log(letterCount);

//Method 2
// const str = "I love JavaScript programming";
// let wordList = str.split(" ");
// let lgWordLength = wordList[0].length;
// let lgWord = wordList[0];
// for (let i = 0; i < wordList.length; i++) {
//   if (wordList[i].length > lgWordLength) {
//     lgWordLength = wordList[i].length;
//     lgWord = wordList[i];
//   }
// }
// console.log(lgWordLength);
// console.log(lgWord);

// 19. String Compression
// "aabbbcc" → "a2b3c2"
//Todo - method is correct but not the best
// let str = "aabbbcc";
// let noDupStr = "";
// for (let i = 0; i < str.length; i++) {
//   if (noDupStr.includes(str[i])) {
//     continue;
//   } else {
//     noDupStr = noDupStr + str[i];
//   }
// }
// let result = "";
// for (let i = 0; i < noDupStr.length; i++) {
//   let count = 0;
//   for (let j = 0; j < str.length; j++) {
//     if (noDupStr[i] === str[j]) {
//       count++;
//     }
//   }
//   result = result + noDupStr[i] + count;
// }
// console.log(result);

//Todo - Optimal Solution
// let str = "aabbcc";
// let result = "";
// let count = 1;
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === str[i + 1]) {
//     count++;
//   } else {
//     result = result + str[i] + count;
//     count = 1;//re inizialize the value for counting different character
//   }
// }

// 20. String Rotation
// "abcde", "cdeab" → true

// let str = "abcde";
// let goal = "cdeab"; // The target you are looking for
// let arr = str.split("");
// let isMatch = false;
// // Loop for the length of the string to try every possible rotation
// for (let i = 0; i < str.length; i++) {
//   // Move last element to front
//   arr.unshift(arr.pop());
//   // Check if the current rotation matches the goal
//   if (arr.join("") === goal) {
//     isMatch = true;
//     break;
//   }
// }
// if (isMatch === false) {
//   console.log("Not Match");
// }
//Todo - optimal solution
// If you concatenate a string with itself (str + str),
// it contains every possible rotation of that string."abcde" + "abcde" = "abcdeabcde"
// Notice "cdeab" is right there in the middle!
// let str = "abcde";
// let goal = "cdeab";
// if (str.length !== goal.length) {
//   console.log(false);
// } else {
//   if ((str + str).includes(goal)) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// 21. Longest Substring Without Repeating Characters
// "abcabcbb" → 3

//Todo - optimal solution is sliding window and woh karna ha
// let str = "abcabcbb";
// let lgSubStr= 1 ;
// for(let i = 0 ; i<str.length;i++){
//     let count = 1;
//     let ans = "";
//     ans = ans + str[i];
//     for(let j = i+1 ; j<str.length ;j++){
//         if(ans.includes(str[j])){
//             break;
//         }else{
//             count++;
//             ans = ans + str[j];
//         }
//     }
//     if(count > lgSubStr){
//         lgSubStr=count;
//     }
// }
// console.log(lgSubStr);

// 22. String → Integer (Manual parseInt)
// "123" → 123

// const str = "123";
// let num = 0;
// for (let i = 0; i < str.length; i++) {
//   const digit = str.charCodeAt(i) - 48;
//   num = num * 10 + digit;
// }
// console.log(num );

// 23. Reverse Words in Sentence
// "I love JS" → "JS love I"
// 👉 Allowed: split
// let str = "I love JS";
// let wordList = str.split(/\s+/);
// let ans = "";
// for (let i = wordList.length - 1; i >= 0; i--) {
//   ans = ans + wordList[i] + " ";
// }
// console.log(ans);

// 24. Group Anagrams
// ["eat","tea","tan","ate"]
let arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
let sortArr = [];
for (let i = 0; i < arr.length; i++) {
  sortArr[i] = arr[i].split("").sort().join("");
}
//removing duplicate  in sortArr
for(let i = 0 ; i<sortArr.length ;i++){
    for(let j = i + 1 ;j<sortArr.length ; j++){
        if(sortArr[i] === sortArr[j]){
            sortArr.splice(j,1);
            j--;
        }
    }
}
let ansArr = [];
for (let i = 0; i < sortArr.length; i++) {
  let empArr = [];
  for (let j = 0; j < arr.length; j++) {
    if (sortArr[i] === arr[j].split("").sort().join("")) {
      empArr.push(arr[j]);
    }
  }
  ansArr.push(empArr);
}
console.log(ansArr);
