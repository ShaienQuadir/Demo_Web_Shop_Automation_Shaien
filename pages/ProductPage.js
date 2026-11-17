class ProductPage {
    constructor(page) {
        this.page = page;

        this.addToCartButton = page.locator('#add-to-cart-button-13');
    }

    async addToCart() {
    await this.addToCartButton.click();

    await this.page.waitForLoadState('networkidle');
    }

}

module.exports = ProductPage;