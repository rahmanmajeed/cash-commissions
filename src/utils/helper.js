import moment from 'moment';
import User from '../services/user.js';

/**
 * calculate percentage from value and rate.
 * @params {amount, rate}
 * @returns {amount}
 */

export const getPercentageValue = (amount, rate) => {
    try {
        return amount * (rate / 100);
    } catch (error) {
        console.error(error);
    }
};

/**
 * rounding commission.
 * @params {amount, decimal point}
 * @returns {decimal} value
 */
export const rounding = (amount, dcpoint = 2) => {
    return (Math.ceil(amount * 100) / 100).toFixed(dcpoint);
};

/**
 * week count.
 * @params {date}
 * @returns {integer}
 */
export const weekCount = (date) => {
    const input = moment(date);
    return input.isoWeek();
};

export const getUser = (users = [], userId = 0) => {
    if (users[userId] !== null && users[userId] !== undefined) {
        return users[userId];
    }
    const result = users;
    result[userId] = new User(userId);
    return result[userId];
};
