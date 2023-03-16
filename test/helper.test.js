import { getPercentageValue, rounding } from '../src/utils/helper.js';

describe('Calculate Helpers Functions', () => {
    test('Check percentage value', () => {
        // prepare test input...
        const data = { amount: 200.0, percentage: 0.03 };

        const result = getPercentageValue(data.amount, data.percentage);

        // assert
        expect(result).toBe(0.06);
    });

    test('Check Rounding value', () => {
        // prepare test input...
        const data = { amount: 0.9, place: 3 };

        const result = rounding(data.amount, data.place);

        // assert
        expect(result).toBe('0.900');
    });
});
