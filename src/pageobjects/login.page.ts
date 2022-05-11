class LoginPage {

    inputUsername = $('#username');
    inputPassword = $('#password');
    forgotPasswordLink = $('//a[text()="Forgot Password?"]');
    loginButton = $('//input[@type="Submit" or name="login"]');

    public async login(username: string, password: string): Promise<void> {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.clickLoginButton();
    }
    public async typeUsername(username: string): Promise<void> {
        await (await this.inputUsername).setValue(username);
    }
    public async typerPassword(password: string): Promise<void> {
        await (await this.inputUsername).setValue(password);
    }
    public async clickLoginButton(): Promise<void> {
        await (await this.loginButton).click();
    }
    public async clickForgotPasswordButton(): Promise<void> {
        await (await this.forgotPasswordLink).click();
    }
}
export default new LoginPage()