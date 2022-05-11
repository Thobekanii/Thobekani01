class NavigationBar {
    logoutLink = $('//a[text()="Logout"]');

    public async clickLogoutLink(): Promise<void> {
        if (await this.logoutLink.waitForDisplayed() == true) {
            await this.logoutLink.click();
        }
    }
}
export default new NavigationBar();