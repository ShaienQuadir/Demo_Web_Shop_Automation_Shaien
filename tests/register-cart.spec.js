const ProductPage = require('../pages/ProductPage');
const LoginPage = require('../pages/LoginPage');
const { test, expect } = require('@playwright/test');
const RegisterPage = require('../pages/RegisterPage');

const registerData = require('../test-data/registerData.json');
const uniqueEmail = `shaien.${Date.now()}@example.com`;

test('TC_REGISTER_001 - Register New Customer', async ({ page }) => {

    const registerPage = new RegisterPage(page);
    const loginPage = new LoginPage(page);

    await page.goto('https://demowebshop.tricentis.com/register');
    
    await registerPage.register(
    registerData.firstName,
    registerData.lastName,
    uniqueEmail,
    registerData.password,
    registerData.gender
);
await expect(page.getByText('Your registration completed')).toBeVisible();
await page.goto('https://demowebshop.tricentis.com/login');
await loginPage.login(
    uniqueEmail,
    registerData.password
);
await expect(page.getByText('Log out')).toBeVisible();
const productPage = new ProductPage(page);
await page.goto('https://demowebshop.tricentis.com/computing-and-internet');
await productPage.addToCart();
await page.goto('https://demowebshop.tricentis.com/cart');
await expect(
    page.locator('.cart-item-row').getByText('Computing and Internet')
).toBeVisible();
await expect(page.locator('input.qty-input')).toHaveValue('1');
});