import { test, expect } from '@playwright/test';

test('ex5 even odd check', async () => {
    for (let i = 1; i <= 10; i++) {
        const isEven = i % 2 === 0;
        console.log(i, isEven ? ' is even' : ' is odd');
    }

    expect(true).toBe(true);
});
