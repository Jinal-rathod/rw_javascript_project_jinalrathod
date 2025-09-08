// ATM Simulation

let balance = parseInt(prompt("Enter your balance....."));
let choice = parseInt(prompt("prase 1 for Check balance......... \nprase 2 for Deposite......... \nprase 3 for withdraw......... \nprase 4 for Exit............ \n"));
let amount;
switch (choice) {
    case 1:
        console.log("Your Balance: ₹" + balance);
        break;

    case 2:
        amount = parseInt(prompt("Enter a amount......"));
        if (amount > 0) {
            balance += amount;
            console.log("Deposited: ₹" + amount);
            console.log("Updated Balance: ₹" + balance);
        } else {
            console.log("Invalid Deposit Amount");
        }
        break;

    case 3:
        amount = parseInt(prompt("Enter a amount......"));
        if (amount <= 0) {
            console.log("Invalid Withdrawal Amount");
        } else if (amount > balance) {
            console.log("Insufficient Balance!");
        } else {
            balance -= amount;
            console.log("Withdrawn: ₹" + amount);
            console.log("Remaining Balance: ₹" + balance);
        }
        break;

    case 4:
        console.log("Thank you for using ATM!");
        break;

    default:
        console.log("Invalid Choice");
}
