// undefined 
let myname;//this is undefined typ 
console.log(typeof myname);// undefined

// and null
let myname1 = null;
console.log(typeof myname1);// object , the object is nothing but bug or error

// BigInt 

let myname2 = BigInt(123456789883635553555);
console.log(typeof myname2, myname2);
myname2 = BigInt(1);
console.log(typeof myname2, myname2);

// second ways of bigInt 

let myname3 = 123456789098765432n;
console.log(typeof myname3, myname3);