import {
    CASH_IN_COMMISSION_RATE,
    CASH_IN_MAX_COMMISSION_AMT,
} from '../config/constants.js';
import { CURRENCY } from '../config/types.js';
import { getPercentageValue } from '../utils/helper.js';

/**
 * calculate cash-in commission.
 * @params {data}
 * @returns {commision}
 */
export const calcCashInCommission = (data) => {
    try {
        const { operation } = data;
        if (operation.currency !== CURRENCY) {
            throw new Error(`${operation.currency} not supported`);
        }
        const commission = getPercentageValue(
            operation.amount,
            CASH_IN_COMMISSION_RATE
        );

        if (commission > CASH_IN_MAX_COMMISSION_AMT) {
            return CASH_IN_MAX_COMMISSION_AMT.toFixed(2);
        }
        return commission;
    } catch (error) {
        throw new Error('somethin went wrong...');
    }
};
