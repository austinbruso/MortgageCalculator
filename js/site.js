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
}