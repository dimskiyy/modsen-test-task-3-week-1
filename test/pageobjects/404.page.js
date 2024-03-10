const { browser } = require("@wdio/globals");

class NotFoundPage {
    open() {
        return browser.url("/404");
    }

    get mainMessage() {
        return $(
            '//Typography[contains(text(), "The page you’re looking for doesn’t exist.")]'
        );
    }

    get notFoundText() {
        return $('//Typography[contains(text(), "404")]');
    }

    get backButton() {
        return $('//Button[contains(text(), "Back Home")]');
    }

    clickBackHomeButton() {
        this.backButton.click();
    }
}

module.exports = new NotFoundPage();
