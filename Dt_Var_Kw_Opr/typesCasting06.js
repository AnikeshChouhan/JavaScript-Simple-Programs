"use strict"
// declare a variable with the use of var keyword 
var phone = 9179901034;
console.log(typeof phone);// number 
// number to String first way 
var phone = phone + " ";
console.log(typeof phone);// String

//String to number first way 
var phone = + "phone";
console.log(typeof phone);// number 

// second way 
var phone = String(phone);
console.log(typeof phone);// string 


// String to Number
var phone = Number(phone);
console.log(typeof phone);// number 