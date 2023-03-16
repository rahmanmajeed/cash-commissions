import {
    CASH_OUT_DEFAULT_RATE,
    CASH_OUT_LP_MIN_COMMISSION_AMT,
} from '../config/constants.js';
import {
    CASH_OUT_WEEK_LIMIT,
    CURRENCY,
    LEGAL_PERSON,
    NATURAL_PERSON,
} from '../config/types.js';
import {
    getPercentageValue,
    getUser,
    rounding,
    weekCount,
} from '../utils/helper.js';

/**
 * calculate cash-out commission & charge.
 * @params {data}
 * @returns {commision}
 */
export const calcCashOutCommission = (data) => {
    const { user_type, ...rest } = data;
    switch (user_type) {
        case NATURAL_PERSON:
            return cashOutCommissionNP(rest);
        case LEGAL_PERSON:
            return cashOutCommissionLP(rest);
        default:
            break;
    }
};

/**
 * calculate commission for Legal User.
 * @params {data}
 * @returns {commision}
 */
export const cashOutCommissionLP = (data) => {
    const { operation } = data;
    if (operation.currency === CURRENCY) {
        const commision = getPercentageValue(
            operation.amount,
            CASH_OUT_DEFAULT_RATE
        );
        if (commision < CASH_OUT_LP_MIN_COMMISSION_AMT)
            return CASH_OUT_LP_MIN_COMMISSION_AMT.toFixed(2);
        return commision.toFixed(2);
    }
    return operation.amount * (CASH_OUT_DEFAULT_RATE / 100);
};

/**
 * calculate commission for Natural User.
 * @params {data}
 * @returns {commision}
 */
export const cashOutCommissionNP = (data) => {
    try {
        const users = [];
        const { operation, user_id, date } = data;
        const user = getUser(users, user_id);
        const week = weekCount(date);
        if (operation.currency === CURRENCY) {
            if (user.isWeekLimitFull(week)) {
                const result = operation.amount * (CASH_OUT_DEFAULT_RATE / 100);
                return rounding(result, 2);
            }
            const taxableAmount =
                operation.amount -
                (CASH_OUT_WEEK_LIMIT - user.getWeekHistory(week));
            if (taxableAmount > 0) {
                user.setWeekHistory(week, operation.amount - taxableAmount);
                const result = taxableAmount * (CASH_OUT_DEFAULT_RATE / 100);
                return rounding(result, 2);
            }
            user.setWeekHistory(week, operation.amount);
            const result = 0;
            return result.toFixed(2);
        }
    } catch (error) {
        console.error(error);
    }
};
