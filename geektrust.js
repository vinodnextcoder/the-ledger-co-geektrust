/**
 * todo code is incomplete
 */
const fs = require("fs");
const filename = process.argv[2];
let loanList = [];
function main(dataInput) {
    var inputLines = dataInput.toString().split("\n")
    for (i = 0; i < inputLines.length; i++) {
        if (inputLines) {
            let input = inputLines[i].split(' ')
            switch (input[0]) {
                case 'LOAN':
                    loan(input[1], input[2], input[3], input[4], input[5])
                    break;
                case 'PAYMENT':
                    payment(input[1], input[2], input[3], input[4]);
                    break;
                case 'BALANCE':
                    balance(input[1], input[2], input[3]);
                    break;
            }
        }
    }

}



const loan = (bankName, borrowerName, amount, years, interest) => {
    let interestAmount = (parseFloat(amount) * parseFloat(years) * parseFloat(interest.trim())) / 100;
    let repayAmount = parseFloat(amount) + parseFloat(interestAmount);
    let emi = repayAmount / (years * 12);
    emi = emi.toFixed(2)
    let terms = (parseFloat(years) * 12);
    interest = interest.trim();
    loanList.push({ bankName, borrowerName, amount, years, interest, interestAmount, repayAmount, emi, terms });
}
// Todo emi interest calculation need do
const payment = (bankName, borrowerName, Amount, no) => {
    for (j = 0; j < loanList.length; j++) {
        if (loanList[j].borrowerName === borrowerName && loanList[j].bankName === bankName) {
            // console.log(loanList[j]);
            let paidEmi = loanList[j].emi * no;
            let newRepayAmount = loanList[j].repayAmount - paidEmi;
            newRepayAmount = newRepayAmount - Amount;
            loanList[j].terms = loanList[j].terms  - no;

        }
    }

}
const balance = (bankName, borrowerName, emiNo) => {
    let getLoanDetails = loanList.find(item => item.borrowerName == borrowerName.trim() && item.bankName === bankName.trim());
    let paidEmi = Math.ceil(getLoanDetails.emi * emiNo);
    let paidEmiTerm = parseFloat(getLoanDetails.terms) - emiNo
    let str = getLoanDetails.bankName + " " + getLoanDetails.borrowerName + " " + paidEmi + " " + paidEmiTerm;
    console.log(str);
}

data = fs.readFileSync(process.argv[2]).toString();
main(data);
module.exports = { main }


