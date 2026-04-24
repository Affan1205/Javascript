// 1️⃣ What is the output?
// console.log(5 > 3);//true

// 2️⃣
// console.log(5 < 3);//false

// 3️⃣
// console.log(10 >= 10);//true

// 4️⃣
// console.log(7 <= 5);//false

// 🔵 PART 2 — == vs === (VERY IMPORTANT ⚠)

// 5️⃣
// In == convert both side into same datatype
// and then check weather they are same or not if same return true else false.
// console.log(5 == "5");//true

// 6️⃣
// console.log(5 === "5");//false

// In === it first check the datatype if datatype is different return false else then check for equality.

// 7️⃣
// Think carefully 😈
// console.log(true == 1);// true because == first convert implicitly into same datatype

// 8️⃣
// console.log(false == 0);// true because == first convert implicitly into same datatype

// 9️⃣
// console.log(null == undefined);//true == convert both null and undefined to 0 and 0==0 is true.

// 🔟
// console.log(null === undefined);// false

// 🔴 PART 3 — Brain Twisters
// 1️⃣1️⃣
// console.log("" == 0);//true

// 1️⃣2️⃣
// console.log("" === 0);//false

// 1️⃣3️⃣
// console.log("10" > 5);//true

// Why?

// 🧠 Mini Challenge
// Take age from user:
// If age >= 18 → print "You are eligible to vote"
// Else → print "Not eligible"

// let age =+prompt("enter your age");
// if(age>=18){
//     console.log("You are eligible to vote.")
// }
// else{
//     console.log(`comeback in ${18-age} years.`)
// }
