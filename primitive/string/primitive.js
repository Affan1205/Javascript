//String Datatype
let name1 = "Aman"; //-->valid
console.log(name1);
let name2 = "Ammmann"; //-->valid
console.log(name2);
// let name3 = 'aman car"s'; //-->valid
// let name3 = 'aman car's"s'; //-->INvalid
let name3 = 'aman car\'s"s'; //-->valid
// let name3 = "aman car'r'r''r'r\"r\"'s"; //-->valid
// (double quotes ke andar single or multiple quotes allowed ha)
console.log(name3);
// let name4 = "aman's "car""; //-->Invalid
let name4 = "aman's \"car\""; //-->valid
console.log(name4);
