
const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test('TC_LOGIN_001 - Invalid Login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto('https://demowebshop.tricentis.com/login');

    await loginPage.login('wronguser123@gmail.com', 'WrongPassword123');

    // Verify error messages
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.accountError).toBeVisible();

    // Verify user is not logged in
    await expect(page).toHaveURL(/\/login/);
    await expect(page.locator('.ico-logout')).toHaveCount(0);
});
