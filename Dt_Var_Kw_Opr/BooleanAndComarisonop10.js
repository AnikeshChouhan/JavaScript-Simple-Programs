// ges the right number 

let rightNum = 50;
let userNum = prompt("Ges any number between 1 to 55")
console.log(userNum);
console.log(rightNum == userNum);
if (rightNum == userNum) {
    console.log(userNum, "Right Number")
} else {
    if (userNum > rightNum) {
        console.log(userNum, " is Greater than right number")
    } else {
        console.log(userNum, " is Smaller than right number")
    }
}
