import inquirer from "inquirer";
console.log("Welcome to the ATM Project");
//for authenticaiton of user 
const authentication = await inquirer.prompt([
    {
        name: "username",
        message: "Please enter your name",
        type: "String",
    },
    {
        name: "pin",
        message: "Please enter your pin",
        type: "number",
        mask: "*"
    }
]);
//hardcoding balance , user and password
let user = "aliba";
let pin = 1234;
let balance = 1000;
if (authentication.username === user && authentication.pin === pin) {
    const ask = await inquirer.prompt([
        {
            name: "option",
            message: "What would you like to do? Withdraw , Deposit Cheque",
            type: "list",
            choices: ["Withdraw", "Deposit"]
        },
        {
            name: "amount",
            message: "How much would you like to withdraw or deposit?",
            type: "number"
        }
    ]);
    if (ask.option === "Withdraw") {
        if (ask.withdraw > balance) {
            console.log("Insufficient Funds");
        }
        else {
            balance = balance - ask.amount;
            console.log(`Your current balance is ${balance}`);
        }
    }
    else if (ask.option === "Deposit") {
        balance = balance + ask.amount;
        console.log(`Your current balance is ${balance}`);
    }
    else {
        console.log("Invalid option");
    }
}
else {
    console.log("Invalid username or password");
}
