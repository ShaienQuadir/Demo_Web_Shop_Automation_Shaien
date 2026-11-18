const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const registerData = require('../test-data/registerData.json');

test('TC_CHECKOUT_001 - Product Search to Order Confirmation', async ({ page }) => {

    await page.goto('https://demowebshop.tricentis.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
});

    const searchBox = page.locator('#small-searchterms');
    const searchButton = page.locator('.search-box-button');

    await searchBox.fill('computer');
    await searchButton.click();

    await expect(
        page.getByRole('link', {
            name: 'Build your own cheap computer',
            exact: true
        })
    ).toBeVisible();

    await page.getByRole('link', {
        name: 'Build your own cheap computer',
        exact: true
    }).click();

    await expect(
        page.locator('.product-name')
    ).toBeVisible();

    const quantityBox = page.locator('#addtocart_72_EnteredQuantity');

    await quantityBox.fill('2');
    await expect(quantityBox).toHaveValue('2');

    await page.locator('#add-to-cart-button-72').click();

    await expect(
        page.locator('.bar-notification')
    ).toBeVisible();

    await page.goto('https://demowebshop.tricentis.com/cart');

    await expect(
        page.locator('.cart')
    ).toBeVisible();

    await expect(
    page.locator('.cart-item-row')
).toContainText('Build your own cheap computer');

await expect(
    page.locator('.qty-input')
).toHaveValue('2');

await page.locator('#termsofservice').check();

await page.locator('#checkout').click();

const loginPage = new LoginPage(page);

await loginPage.login(
    registerData.email,
    registerData.password
);

await expect(
    page.getByRole('link', {
        name: registerData.email,
        exact: true
    })
).toBeVisible();

await expect(
    page.locator('.page-title')
).toContainText('Shopping cart');
});