// 🟢 Level 1 – Basic for Loop
// 1️⃣ Print numbers from 1 to 10
// for (let x = 1; x <= 10; x++) {
//   console.log(x);
// }

// 2️⃣ Print numbers from 10 to 1 (reverse)
// for(let x = 10;x>=1 ;x--){
//     console.log(x)
// }

// 3️⃣ Print all even numbers from 1 to 20
// for(let x = 1; x<=20;x++){
//     if(x%2 == 0){
//         console.log(x)
//     }
// }

// 4️⃣ Print all odd numbers from 1 to 20
// for(let x = 1; x<=20;x++){
//     if(x%2 != 0){
//         console.log(x)
//     }
// }

// 🟢 Level 2 – Sum Based Problems
// 5️⃣ Find sum of numbers from 1 to 100
// Expected output:
// 5050
// let sum = 0 ;
// for(let x = 1 ; x <=100 ; x++){
//     sum = sum +x;
// }
// console.log(sum);

// 6️⃣ Find sum of all even numbers from 1 to 50
// let evenSum = 0;
// for (let x = 1; x <= 50; x++) {
//   if (x % 2 == 0) {
//     evenSum = evenSum + x;
//   }
// }
// console.log(evenSum);

// 🟢 Level 3 – Logical Loop Thinking
// 7️⃣ Print multiplication table of 5
// Output should be like:
// 5 x 1 = 5
// 5 x 2 = 10
// ...
// 5 x 10 = 50
// let num =+prompt(`enter a number`);
// for(let i = 1 ; i<=10 ; i++){
//     console.log(`${num} * ${i} = ${num*i}`);
// }

// 8️⃣ Count how many numbers between 1 to 100 are divisible by 3

// let count = 0 ;
// for(let i = 1 ;i<=100;i++){
//     if(i%3==0){
//         count++;
//     }
// }
// console.log(`${count} are number in between 1 and 100 which is divisible by 3`)

// 🟢 Level 4 – While Loop Practice
// 9️⃣ Print numbers from 1 to 5 using while
// let x = 1;
// while (x <= 5) {
//   console.log(x);
//   x++;
// }

// 🔟 Keep asking user for number until they enter 0
// while(true){
//     let num =+prompt(`enter an number and 0 for exit.`);
//     if(num !=0){
//         console.log(num);
//     }
//     else if(num == 0){
//         break;
//     }
// }
