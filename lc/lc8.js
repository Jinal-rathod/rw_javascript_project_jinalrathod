/* alert  , prompt and windows.conform */

alert("Hello World!!");
let amount1 = parseInt(prompt("which amount you are split!!"));
let amount2 = parseInt(prompt("which amount you are split!!"));
console.log(amount1 + amount2);

confirm("Are you cancel!!!")


// Bill Splitter Program 

{
    console.log("Welcome to the Bill Splitter!!");

    let bill = parseInt(prompt("Enter your bill amount :"))

    if (bill <= 0 || isNaN(bill)) {
        console.log("invalid amount , please enter the right amount.");
    }

    let people = parseInt(prompt("Enter number of people:"))

    if (people <= 0 || isNaN(people)) {
        console.log("invalid number of people , please enter valid number.");
    }

    let tipPersentage = parseInt(prompt("Enter tip Persentage(0 , 5 , 10 , 20):"))

    if (tipPersentage < 0 || isNaN(tipPersentage)) {
        console.log("Invalid tip Amount Persentage, Please enter again.");
    }

    // tip calculation
    let tipAmount = (tipPersentage / 100) * bill

    let totalAmount = bill + tipAmount

    let perPerson = totalAmount / people


    console.log("\n......................................");
    console.log("Tip Amount : ", tipAmount);
    console.log("Total Bill Amount : ", totalAmount);
    console.log("Each person should pay: ", perPerson);
    console.log(".........................................\n");

}