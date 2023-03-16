import { calcCashInCommission } from '../src/services/cashIn.js';

describe('Calculate Cash-in Commission Test', () => {
    test('Calculate Cash-in Commission Test#01', () => {
        // prepare test input...
        const data = {
            date: '2016-01-05',
            user_id: 1,
            user_type: 'natural',
            type: 'cash_in',
            operation: { amount: 200.0, currency: 'EUR' },
        };

        const result = calcCashInCommission(data);

        // assert
        expect(result).toBe(0.06);
    });
});
