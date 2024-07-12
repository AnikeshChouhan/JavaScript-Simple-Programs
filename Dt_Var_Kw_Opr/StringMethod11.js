let myname = "   Anikesh Chouhan  ";
let myNameLeg = myname.length;
console.log("After Trim len is :", myNameLeg)

// trim()
let beforeTrimMyName = myname.trim();
console.log("Before Trim ", beforeTrimMyName.length);
console.log(beforeTrimMyName);

// toUpperCase()

let mynameInUppercase = beforeTrimMyName.toUpperCase();
console.log(mynameInUppercase);

// toLowerCase()
let mynameInLowercase = beforeTrimMyName.toLowerCase();
console.log(mynameInLowercase);

// slice
let findSubString = beforeTrimMyName.slice(5, 11);
console.log(findSubString);