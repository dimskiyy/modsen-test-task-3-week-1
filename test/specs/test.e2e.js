const { expect } = require("@wdio/globals");
const NotFoundPage = require("../pageobjects/404.page");

describe("NotFound Page", () => {
    it("should display 404 message and Back Home button", () => {
        NotFoundPage.open();

        expect(NotFoundPage.mainMessage).toBeDisplayed();
        expect(NotFoundPage.notFoundText).toBeDisplayed();
        expect(NotFoundPage.backButton).toBeDisplayed();
    });

    it("clicking on Back Home button navigates to home page", () => {
        NotFoundPage.open();

        NotFoundPage.clickBackHomeButton();

        expect(browser).toHaveUrl("/");
    });
});
