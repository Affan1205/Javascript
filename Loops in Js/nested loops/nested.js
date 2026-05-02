// *****
// *****
// *****
// *****
// *****
// let n = +prompt(`enter an input`);
// for (let row = 1; row <= n; row++) {
//     let ans ="";
//     for (let col = 1; col <= n; col++) {
//         ans = ans +"*";
//     }
//     console.log(ans)
// }

// *
// **
// ***
// ****
// *****
// let n = +prompt(`enter an input`);
// for (let row = 1; row <= n; row++) {
//     let ans ="";
//     for (let col = 1; col <= row; col++) {
//         ans = ans +"*";
//     }
//     console.log(ans)
// }

//     *
//    **
//   ***
//  ****
// *****
// let n = +prompt(`enter an input`);
// for (let row = 1; row <= n; row++) {
//   let ans = "";
//   let spaceAns = " ";
//   let space = n - row;
//   for (let i = space; i > 0; i--) {
//     ans = ans + spaceAns;
//   }
//   for (let col = 1; col <= row; col++) {
//     ans = ans + "*";
//   }
//   console.log(ans);
// }

// *****
// ****
// ***
// **
// *
// let n = +prompt(`enter an input`);
// for (let row = 1; row <= n; row++) {
//   let ans = "";
//   for (let col = 1; col <= n - row + 1; col++) {
//     ans = ans + "*";
//   }
//   console.log(ans);
// }

// 1
// 12
// 123
// 1234
// 12345
// let n = +prompt(`enter an input`);
// for (let row = 1; row <= n; row++) {
//   let ans = "";
//   for (let col = 1; col <= row; col++) {
//     ans = ans + col;
//   }
//   console.log(ans);
// }

// 1
// 22
// 333
// 4444
// 55555
// let n = +prompt(`enter an input`);
// for (let row = 1; row <= n; row++) {
//   let ans = "";
//   for (let col = 1; col <= row; col++) {
//     ans = ans + row;
//   }
//   console.log(ans);
// }

// *****
// *   *
// *   *
// *   *
// *****
// let n = +prompt(`enter an input`);
// for (let row = 1; row <= n; row++) {
//   let ans = "";
//   for (let col = 1; col <= n; col++) {
//     if (row == 1 || col == 1 || row == n || col == n) {
//       ans = ans + "*";
//     }
//     else{
//         ans = ans + " "
//     }
//   }
//   console.log(ans);
// }

// A
// AB
// ABC
// ABCD
// ABCDE
// let n = +prompt(`enter an input`);
// for (let row = 1; row <= n; row++) {
//   let ans = "";
//   let count = 65;
//   for (let col = 1; col <= row; col++) {
//     let letter = String.fromCharCode(count);
//     ans = ans + letter;
//     count++;
//   }
//   console.log(ans);
// }

//     *
//    ***
//   *****
//  *******
// *********
// let n = +prompt(`enter an input`);
// for (let row = 1; row <= n; row++) {
//   let ans = "";
//   let spaceAns = " ";
//   let space = n - row;
//   for (let i = space; i > 0; i--) {
//     ans = ans + spaceAns;
//   }
//   for (let col = 1; col <= row; col++) {
//     ans = ans + "*";
//   }
//   for (let leftcol = 1; leftcol <= row - 1; leftcol++) {
//     ans = ans + "*";
//   }
//   console.log(ans);
// }
