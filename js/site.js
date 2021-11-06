const { totalmem } = require("os");

// Get Values
function getValues() {
    // Get input Values
     let loanAmount = document.getElementById("loanAmount").value;
     let termLength = document.getElementById("termLength").value;
     let interestRate = document.getElementById("interestRate").value;

    // Turn strings into Integers
    loanAmount = parseInt(loanAmount);
    termLength = parseInt(termLength);
    interestRate = parseInt(interestRate);

    // Validate integers
    if(Number.isInteger(loanAmount) && Number.isInteger(termLength) && Number.isInteger(interestRate)) {
        tableLogic(loanAmount, termLength, interestRate);
            

    } else {
        alert("Please type an Integer Value only...")
    }
}

function tableLogic(balance, term, rate) {

    let array = [];

    for (let index = 1; index <= term; index++) {
        let tMonthlyPayment =  (balance) * (rate/1200) / (1 - (1 + rate/1200)** (-term)); // $471 - don't change
        let fremainingBalance = balance;
    
       

       array.push(fremainingBalance);
    }

    return array;
}
  

// Display Remaining Data
function displayData() {

}