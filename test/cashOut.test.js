import {
    cashOutCommissionLP,
    cashOutCommissionNP,
} from '../src/services/cashOut.js';

describe('Cash-out Commission Test for Legal person', () => {
    test('Calculate Cash-out Commission ', () => {
        // prepare test input...
        const data = {
            date: '2016-01-06',
            user_id: 2,
            user_type: 'juridical',
            type: 'cash_out',
            operation: { amount: 300.0, currency: 'EUR' },
        };

        const result = cashOutCommissionLP(data);

        // assert
        expect(result).toBe('0.90');
    });
});

describe('Cash-out Commission Test for Natural person', () => {
    test('Calculate Cash-out Commission for Natural person', () => {
        // prepare test input...
        const data = {
            date: '2016-01-07',
            user_id: 1,
            user_type: 'natural',
            type: 'cash_out',
            operation: { amount: 1000.0, currency: 'EUR' },
        };
        const result = cashOutCommissionNP(data);

        // assert
        expect(result).toBe('0.00');
    });
    test('Calculate Cash-out Commission for Natural person test charge', () => {
        // prepare test input...
        const data = {
            date: '2016-01-07',
            user_id: 1,
            user_type: 'natural',
            type: 'cash_out',
            operation: { amount: 1500.0, currency: 'EUR' },
        };
        const result = cashOutCommissionNP(data);

        // assert
        expect(result).toBe('1.50');
    });
});
