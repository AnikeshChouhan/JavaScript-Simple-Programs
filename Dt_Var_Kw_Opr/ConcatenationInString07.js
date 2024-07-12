
let firstName = "Anikesh";
let lastName = "Chouhan";
let fullName = firstName + " " + lastName;
console.log(fullName);// Anikesh Chouhan 
console.log(typeof fullName); // string

let firstN = "100";
let lastN = "1";
let fullN = firstN + lastN;
console.log(fullN); //1001
console.log(typeof fullN);// string


// but 
fullN = +firstN + +lastN;
console.log(fullN);//101
console.log(typeof fullN);//number