import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TermConditionsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get title() {
        return $('body')
    }


    getTitle() {
        return super.getText(this.title)
    }

}

export default new TermConditionsPage();
