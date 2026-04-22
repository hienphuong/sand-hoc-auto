import { test, expect } from '@playwright/test';
test('check event number', async() => {
    const number = 12;
    let name = "my number";
    let isEven = false;
    if(number%2===0){
        isEven= true;
    }
    expect(isEven).toBe(true);
});
