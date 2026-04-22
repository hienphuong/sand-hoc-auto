
import { test, expect } from '@playwright/test';

test('check const value is immutable', async () => {
    let myName = "Alex";
    myName = "Nagy";

    expect(myName).toBe("Nagy");
    expect(typeof myName).toBe("string");
});



