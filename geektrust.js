/**
 * todo code is incomplete
 */
const fs = require("fs");
const filename = process.argv[2];

function main(dataInput) {
    var inputLines = dataInput.toString().split("\n")
    for (i = 0; i < inputLines.length; i++) {
        if (inputLines) {
            let input = inputLines[i].split(' ')
            switch (input[0]) {
                case 'LOAN':
                    loan(input[1], input[2], input[3], input[4], input[4])
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

const loan = (bankName, borrowerName, Amount, years, interest) => {

}
const payment = (bankName, borrowerName, Amount, emiNo) => {

}
const balance = (bankName, borrowerName, emiNo) => {

}

data = fs.readFileSync(process.argv[2]).toString();
main(data);
module.exports = { main }
