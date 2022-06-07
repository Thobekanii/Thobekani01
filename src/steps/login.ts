import { Given, Then } from "@cucumber/cucumber";
import LoginPage from "../pageobjects/login.page";
import NavigationBar from "../pageobjects/home.page"

Then(/^I enter username (.*)$/, async (username) => {
    await LoginPage.typeUsername(username);
});

Then(/^I enter password (.*)$/, async (password) => {
    await LoginPage.typerPassword(password);
});

Then(/^I click login button$/, async () => {
    await LoginPage.clickLoginButton();
});

Then(/^I verify user is logged in$/, async () => {
    await expect(NavigationBar.logoutLink.isExisting());
});

Then(/^I verify username error$/, async () => {
    await LoginPage.validateUsernameErrorMessage();
});

Then(/^I verify password error$/, async () => {
    await LoginPage.validatePasswordErrorMessage();
});
