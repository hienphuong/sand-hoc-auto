import { test, expect } from '@playwright/test';

test('weight range based on height 1m72', async () => {
    const height = 172;

    const baseWeight = height - 100; // 72kg

    const minWeight = baseWeight * 0.8;
    const idealWeight = baseWeight * 0.9;
    const maxWeight = baseWeight;

    expect(minWeight).toBe(57.6);
    expect(idealWeight).toBe(64.8);
    expect(maxWeight).toBe(72);
});