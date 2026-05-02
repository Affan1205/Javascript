// 🟡 Level 1 — Basic Loop Practice
// 👉 Build control over loops
// 1. Print numbers:
// 1 to 100
// 100 to 1
// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// for(let i = 100 ;i>=1;i--)
// {
//     console.log(i);
// }

// 2. Print:
// All even numbers from 1 to 50
// for(let i = 1 ; i<=50 ;i++)
// {
//     if(i%2 === 0)
//     {
//         console.log(i)
//     }
// }

// All odd numbers from 1 to 50
// for(let i = 1 ; i<=50 ;i++)
// {
//     if(i%2 !== 0)
//     {
//         console.log(i)
//     }
// }

// 3. Take input n
// 👉 Print numbers from 1 to n
// let num = +prompt("enter a number");
// for (let i = 1; i <= num; i++) {
//   console.log(i);
// }

// 4. Sum of first n numbers
// let num = +prompt("enter a number");
// let sum = 0;
// for (let i = 1; i <= num; i++) {
//   sum = sum + i;
// }
// console.log(sum)

// 5. Multiplication table

// 👉 Input: n
// 👉 Output:

// n x 1 = n
// n x 2 = 2n
// ...

// let num = +prompt("Enter a number")
// for(let i = 1 ;i<=10;i++)
// {
//     console.log(`${num} x ${i} = ${num*i}`)
// }

// 🔵 Level 2 — Logic Building
// 6. Factorial

// 👉 Input: n
// 👉 Output: n!
// let num = +prompt("Enter a number");
// let fact = 1;
// if (num === 0) {
//   console.log("1");
// } else {
//   for (let i = 1; i <= num; i++) {
//     fact = fact * i;
//   }
// }
// console.log(fact)

// 7. Count digits in a number
// 👉 Input: 12345
// 👉 Output: 5
// let num = +prompt("Enter a number");
// let temp = num;
// let count = 0 ;
// while(temp !== 0){
//     count++;
//     temp=Math.trunc(temp/10);
// }
// console.log(count)

// 8. Reverse a number

// 👉 Input: 1234
// 👉 Output: 4321
// let num = +prompt("Enter a number");
// let temp = num;
// let ans = 0;
// while (temp !== 0) {
//   let digit = temp % 10;
//   ans = ans * 10 + digit;
//   temp = Math.trunc(temp / 10);
// }
// console.log(`Reverse of ${num} is ${ans}`);

// 9. Check palindrome number

// 👉 121 → YES
// 👉 123 → NO

// let num = +prompt("Enter a number");
// let temp = num;
// let ans = 0;
// while (temp !== 0) {
//   let digit = temp % 10;
//   ans = ans * 10 + digit;
//   temp = Math.trunc(temp / 10);
// }
// console.log(`Reverse of ${num} is ${ans}`);
// if (ans === num) {
//   console.log(`${num} is a Palindrome.`);
// } else {
//   console.log(`${num} is not a Palindrome.`);
// }

// 10. Sum of digits

// 👉 Input: 123
// 👉 Output: 6
// let num = +prompt("Enter a number");
// let temp = num;
// let sum = 0;
// while (temp !== 0) {
//   let digit = temp % 10;
//   sum += digit;
//   temp = Math.trunc(temp / 10);
// }
// console.log(`sum of digit of ${num} = ${sum}`);

// 🔴 Level 3 — Important Concepts
// 11. Fibonacci series (very important)
// let a = 0;
// let b = 1;
// console.log(a, b);

// for (let i = 1; i < 10; i++) {
//   let nextSum = a + b;
//   console.log(nextSum);
//   a = b;
//   b = nextSum;
// }
// 12. Prime number check

// 👉 Input: n
// 👉 Check if prime
// let num = +prompt("Enter a number");
// let isPrime = true;
// if (num <= 1) {
//   isPrime = false;
// } else {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       isPrime = false;
// break;
//     }
//   }
// }
// if (isPrime) {
//   console.log(`${num} is Prime Number.`);
// } else {
//   console.log(`${num} is not a Prime Number.`);
// }

// 13. Print all primes from 1 to n
// let num = +prompt("Enter a number");
// for (let i = 1; i <= num; i++) {
//   let isPrime = true;
//   let value = i;
//   if (value <= 1) {
//     continue;
//   } else {
//     for (let i = 2; i < value; i++) {
//       if (value % i === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       console.log(value);
//     }
//   }
// }

// 🔥 Level 4 — Patterns (MOST IMPORTANT)

// Start with these:

// 14. Square pattern
// * * * *
// * * * *
// * * * *
// * * * *
// let n = 4;
// for (let row = 1; row <= n; row++) {
//   let ans = "";
//   for (let col = 1; col <= n; col++) {
//     ans = ans + "*";
//   }
//   console.log(ans);
// }

// 15. Right triangle
// *
// * *
// * * *
// * * * *
// let n = 4;
// for (let row = 1; row <= n; row++) {
//   let ans = "";
//   for (let col = 1; col <= row; col++) {
//     ans = ans + "*";
//   }
//   console.log(ans);
// }

// 16. Reverse triangle
// * * * *
// * * *
// * *
// *
// let n = 4;
// for (let row = 1; row <= n; row++) {
//   let ans = "";
//   for (let col = 1; col <= n - row + 1; col++) {
//     ans = ans + "*";
//   }
//   console.log(ans);
// }

// 17. Number pattern
// * * * *
//   * * *
//     * *
//       *
// let n = 4;
// for (let row = 1; row <= n; row++) {
//   let ans = "";
//   for (let space = 1; space <= row - 1; space++) {
//     ans = ans + " ";
//   }
//   for (let col = 1; col <= n - row + 1; col++) {
//     ans = ans + "*";
//   }
//   console.log(ans);
// }

//Input a number and print all the factors of that number (use loops).
// let num = +prompt("Enter a number");
// for (let i = 1; i <= num; i++) {
//   if (num % i === 0) {
//     console.log(i);
//   }
// }

// Take integer inputs till the user enters 0 and print the sum of all numbers (HINT: while loop)
// let sum = 0;
// while (true) {
//   let num = +prompt("Enter a number and 0 for exit");
//   if (num === 0) {
//     break;
//   }
//   sum = sum + num;
// }
// console.log(sum)

// Take integer inputs till the user enters 0 and print the largest number from all.
// let largest = -Infinity;
// while (true) {
//   let num = +prompt("Enter a number and 0 for exit");
//   if (num === 0) {
//     break;
//   } else {
//     if (num > largest) {
//       largest = num;
//     }
//   }
// }console.log(largest)

// Armstrong Number
// let num = +prompt("Enter a number");
// let temp = num;
// let count = 0;
// while (temp != 0) {
//   count++;
//   temp = Math.trunc(temp / 10);
// }
// temp = num;
// let ans = 0;
// while (temp != 0) {
//   let digit = temp % 10;
//   ans = ans + Math.pow(digit, count);
//   temp = Math.trunc(temp / 10);
// }
// if (ans === num) {
//   console.log(`${num} is Armstrong number`);
// } else {
//   console.log(`${num} is not a Armstrong number`);
// }
// HCF Of Two Numbers Program
// let a = 18;
// let b = 24;
// let hcf = 0;
// for (let i = 1; i < Math.min(a, b); i++) {
//   if (a % i === 0 && b % i === 0) {
//     hcf = i;
//   }
// }
// console.log(`Hcf of ${a} and ${b} = ${hcf}`);

// LCM Of Two Numbers
// let a = 18;
// let b = 24;
// let hcf = 0;
// for (let i = 1; i < Math.min(a, b); i++) {
//   if (a % i === 0 && b % i === 0) {
//     hcf = i;
//   }
// }
// console.log(`Hcf of ${a} and ${b} = ${hcf}`);
// let lcm = (a * b) / hcf;
// console.log(`lcm of ${a} and ${b} = ${lcm}`);

// Perfect number;
// let num = +prompt("enter number");
// let factorSum = 0;
// for (let i = 1; i < num; i++) {
//   if (num % i === 0) {
//     factorSum += i;
//   }
// }
// if (factorSum === num) {
//   console.log(`${num} is a perfect number.`);
// } else {
//   console.log(`${num} is not perfect number.`);
// }

// write a program to print the sum of negative numbers, sum of positive even numbers and
// the sum of positive odd numbers from a list of numbers(N) entered by the user.
// The list terminates when the user enters a zero.return 0;
// let oddSum = 0;
// let evenSum = 0;
// let negSum = 0;
// while (true) {
//   let num = +prompt("enter a number");
//   if (num === 0) {
//     break;
//   } else {
//     if (num > 0) {
//       if (num % 2 === 0) {
//         evenSum += num;
//       } else {
//         oddSum += num;
//       }
//     } else {
//       negSum += num;
//     }
//   }
// }
// console.log(`odd pos sum ${oddSum}`);
// console.log(`even pos sum ${evenSum}`);
// console.log(`neg sum ${negSum}`);
