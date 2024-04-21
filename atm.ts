#! /usr/bin/env node

import inquirer from "inquirer";

let mybalance = 10000;
let mypin = 1234;

 let pinAnswer = await inquirer.prompt([{
    
    name: "pin",
    message: "enter your pin",
    type: "number",
}]

 );

  if (pinAnswer.pin === mypin)
    console.log("check pin code!!!");

    let oprationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message:"please select option",
                type:"list",
                choices:["withdraw", "cheak balance"],
            }
        ]
    );


    console.log("oprationAns");
  
    if (oprationAns.operation === "withdraw"){
        let amountAns = await inquirer.prompt([

        
        {
name: "amount",
message: "enter your amount",
type: "number",



      
}



    ]
);

if(amountAns.amount <= mybalance && amountAns.amount >= 500){
mybalance -= amountAns.amount;
console.log("your remaning balance is:" + mybalance);
    }
    else if (oprationAns.operation === "check balance"){
        console.log("your balance is:" + mybalance);
    }
 else{
    console.log("invaild amount");
}
    }  
    else if(oprationAns.operation === "cheak balance"){
        console.log("your balance is:" + mybalance);
    }
    else {
        console.log("invalid pin");
    }