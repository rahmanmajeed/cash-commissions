import fs from 'fs';
import { CASH_IN, CASH_OUT } from './config/types.js';
import { calcCashInCommission } from './services/cashIn.js';
import { calcCashOutCommission } from './services/cashOut.js';

let inputfile = process.argv.slice(2)[0];
if (!inputfile) {
    inputfile = 'input.json';
}
const inputFilePath = `./${inputfile}`;

const inputs = JSON.parse(fs.readFileSync(inputFilePath));
const users = [];
inputs.forEach((input) => {
    switch (input.type) {
        case CASH_IN:
            console.log(calcCashInCommission(input));
            break;
        case CASH_OUT:
            console.log(calcCashOutCommission(input, users));
            break;
        default:
            break;
    }
});
