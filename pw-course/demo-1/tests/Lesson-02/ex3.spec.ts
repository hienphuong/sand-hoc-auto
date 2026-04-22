import { test, expect } from '@playwright/test';

test('check number sign', async () => {
    const num = 2;

    let result;

    if (num > 0) {
        result = 'positive';
    } else if (num < 0) {
        result = 'negative';
    } else {
        result = 'zero';
    }

    expect(result).toBe('positive');
});