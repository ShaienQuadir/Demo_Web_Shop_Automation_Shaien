
class RegisterPage {
    constructor(page) {
        this.page = page;

        // Gender Locators
        this.maleGender = page.locator('#gender-male');
        this.femaleGender = page.locator('#gender-female');

        // Registration Form Locators
        this.firstNameInput = page.locator('#FirstName');
        this.lastNameInput = page.locator('#LastName');
        this.emailInput = page.locator('#Email');
        this.passwordInput = page.locator('#Password');
        this.confirmPasswordInput = page.locator('#ConfirmPassword');
        this.registerButton = page.locator('#register-button');
    }

    async register(firstName, lastName, email, password, gender) {

        // Select Gender
        if (gender === 'Male') {
            await this.maleGender.check();
        } else {
            await this.femaleGender.check();
        }

        // Fill Registration Form
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.confirmPasswordInput.fill(password);

        // Click Register Button
        await this.registerButton.click();
    }
}

module.exports = RegisterPage;
