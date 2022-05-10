import { Given, Then } from "@cucumber/cucumber";
import { base } from "../configs/base.conf";
import LoginPage from "../pageobjects/login.page";
import NavigationBar from "../pageobjects/home.page"

Given(/^I navigate to AdactIn$/, async () => {

});

Then(/^I enter username (. *)$/, async (username) => {
    await LoginPage.typeUsername(username);
});

Then(/^I enter password (. *)$/, async (password) => {
    await LoginPage.typerPassword(password);
});

Then(/^I click login button$/, async () => {
    await LoginPage.clickLoginButton();
});

Then(/^I verify user is logged in$/, async () => {
    await expect(NavigationBar.logoutLink.isExisting());
});
