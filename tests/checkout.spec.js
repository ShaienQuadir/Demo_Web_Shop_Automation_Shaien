const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const registerData = require('../test-data/registerData.json');

test('TC_CHECKOUT_001 - Product Search to Order Confirmation', async ({ page }) => {

    await page.goto('https://demowebshop.tricentis.com/', {
        waitUntil: 'domcontentloaded',
        timeout: 60000
    });

    // Step 1: Product Search
    const searchBox = page.locator('#small-searchterms');
    const searchButton = page.locator('.search-box-button');

    await searchBox.fill('computer');
    await searchButton.click();

    // Step 2: Select Product
    await page.getByRole('link', {
        name: 'Build your own cheap computer',
        exact: true
    }).click();

    // Step 3: Product Details
    await expect(page.locator('.product-name')).toBeVisible();

    // Step 4: Select Quantity
    const quantityBox = page.locator('#addtocart_72_EnteredQuantity');
    await quantityBox.fill('2');
    await expect(quantityBox).toHaveValue('2');

    // Step 5: Add to Cart
    await page.locator('#add-to-cart-button-72').click();
    await expect(page.locator('.bar-notification')).toBeVisible();

    // Step 6: Shopping Cart
    await page.goto('https://demowebshop.tricentis.com/cart');

    await expect(page.locator('.cart')).toBeVisible();

    await expect(page.locator('.cart-item-row'))
        .toContainText('Build your own cheap computer');

    await expect(page.locator('.qty-input')).toHaveValue('2');

    // Step 7: Checkout
    await page.locator('#termsofservice').check();
    await page.locator('#checkout').click();

    // Step 8: Login
    const loginPage = new LoginPage(page);

    await loginPage.login(
        registerData.email,
        registerData.password
    );

    // Step 9: Verify Login
    await expect(page.getByRole('link', {
        name: registerData.email,
        exact: true
    })).toBeVisible();

    // Step 10: Checkout Again After Login
    await expect(page.locator('.page-title'))
        .toContainText('Shopping cart');

    await page.locator('#termsofservice').check();
    await page.locator('#checkout').click();

// Step 11: Checkout Page
await expect(page.locator('.page-title'))
    .toContainText('Checkout');


// Step 12: Fill Billing Address if New Address Form is visible

const billingFirstName = page.locator('#BillingNewAddress_FirstName');

if (await billingFirstName.isVisible()) {

    await billingFirstName.fill(registerData.firstName);

    await page.locator('#BillingNewAddress_LastName')
        .fill(registerData.lastName);

    await page.locator('#BillingNewAddress_Email')
        .fill(registerData.email);

    await page.locator('#BillingNewAddress_CountryId')
        .selectOption({ label: registerData.country });

    await page.locator('#BillingNewAddress_City')
        .fill(registerData.city);

    await page.locator('#BillingNewAddress_Address1')
        .fill(registerData.address1);

    await page.locator('#BillingNewAddress_ZipPostalCode')
        .fill(registerData.zipCode);

    await page.locator('#BillingNewAddress_PhoneNumber')
        .fill(registerData.phone);
}

// Step 13: Continue Billing Address

await page.locator(
    '#billing-buttons-container .new-address-next-step-button'
).click();

await page.waitForLoadState('domcontentloaded');

// Step 14: Continue Shipping Address

const continueButtons = page.locator(
    'input.new-address-next-step-button'
);

await expect(continueButtons.nth(1)).toBeVisible();

await continueButtons.nth(1).click();



// Step 15: Select Shipping Method - Ground

await expect(
    page.locator('.shipping-method-next-step-button')
).toBeVisible();

await page.locator(
    'input[name="shippingoption"]'
).first().check();

// Step 16: Continue Shipping Method

await page.locator(
    '.shipping-method-next-step-button'
).click();

// Step 17: Select Cash On Delivery

await expect(
    page.locator('.payment-method-next-step-button')
).toBeVisible();

await page.locator(
    'input[name="paymentmethod"]'
).first().check();

// Step 18: Continue Payment Method

await page.locator(
    '.payment-method-next-step-button'
).click();

// Step 19: Continue Payment Information

await expect(
    page.locator('.payment-info-next-step-button')
).toBeVisible();

await page.locator(
    '.payment-info-next-step-button'
).click();

// Step 20: Confirm Order

await expect(
    page.locator('.confirm-order-next-step-button')
).toBeVisible();

await page.locator(
    '.confirm-order-next-step-button'
).click();

// Step 21: Verify Order Confirmation

await expect(page.locator('.section.order-completed'))
    .toBeVisible();

await expect(page.locator('.order-completed .title'))
    .toContainText('Your order has been successfully processed');

console.log('ORDER SUCCESSFULLY COMPLETED!');

});