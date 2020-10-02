import Page from './page';
import WAIT_TIMES from "../../constants/WAIT_TIMES";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class IndexPage extends Page {
    /**
     * define selectors using getter methods
     */
    get title() {
        return $('h1')
    }

    get inputNumber() {
        return $('.input-group #number')
    }

    get btnCalculate() {
        return $('#getFactorial')
    }

    get textResult() {
        return $('#resultDiv')
    }

    get linksCopyright() {
        return {
            termsConditions: $$('.wor_copyright a')[0],
            privacy: $$('.wor_copyright a')[1],
            qxf: $$('.wor_copyright a')[2],
        }
    }

    getTitle() {
        return super.getText(this.title)
    }

    accessTermConditions() {
        super.click(this.linksCopyright.termsConditions)
    }

    accessPrivacy() {
        super.click(this.linksCopyright.privacy)
    }

    sendNumber(number) {
        super.sendKeys(this.inputNumber, number)
    }

    clickCalculate() {
        super.click(this.btnCalculate)
        super.waitForElement(this.textResult)
    }

    getResult() {
        super.waitForElement(this.textResult)
        browser.waitUntil(
            () =>
                super.getText(this.textResult).includes('The factorial of'),
            WAIT_TIMES.SHORT, `Expected Factorial result not found`
        )

        return super.getText(this.textResult)
    }
}

export default new IndexPage();
