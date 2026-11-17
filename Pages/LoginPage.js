class LoginPage {
    constructor(page) {
        this.page = page;

        this.emailInput = page.locator('#Email');
        this.passwordInput = page.locator('#Password');
        this.loginButton = page.locator('.login-button');

        this.errorMessage = page.getByText('Login was unsuccessful. Please correct the errors and try again.');
        this.accountError = page.getByText('No customer account found');
    }

    async login(email, password) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
    
}
module.exports = LoginPage;