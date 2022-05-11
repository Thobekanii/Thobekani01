import { Given, Then } from "@cucumber/cucumber";
import Page from "../pageobjects/page";

Given(/^I navigate to AdactIn$/, async () => {
    await Page.open();
});