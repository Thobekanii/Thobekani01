class LoginPage {

    inputUsername = $('#username');
    inputPassword = $('#password');
    forgotPasswordLink = $('//a[text()="Forgot Password?"]');
    loginButton = $('//input[@type="Submit" or name="login"]');

    usernameError = $('(//span[@class="login_error"])[1]');
    passwordError = $('(//span[@class="login_error"])[2]');
    invalidLoginError = $('//div[@class="auth_error"]/b/.');

    public async login(username: string, password: string): Promise<void> {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.clickLoginButton();
    }
    public async typeUsername(username: string): Promise<void> {
        await (await this.inputUsername).setValue(username);
    }
    public async typerPassword(password: string): Promise<void> {
        await (await this.inputPassword).setValue(password);
    }
    public async clickLoginButton(): Promise<void> {
        await (await this.loginButton).waitForClickable();
        await (await this.loginButton).click();
    }
    public async clickForgotPasswordButton(): Promise<void> {
        await (await this.forgotPasswordLink).click();
    }
    public async validateUsernameErrorMessage():Promise<void>{
        await expect(await this.usernameError).toHaveTextContaining("Enter Username");
    }
    public async validatePasswordErrorMessage():Promise<void>{
        await expect(await this.passwordError).toHaveTextContaining("Enter Password");
    }

    public async validateInvalidLoginErrorMessage():Promise<void>{
        await expect(await this.invalidLoginError).toBeExisting();
    }
}
export default new LoginPage()