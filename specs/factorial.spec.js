import { assert, expect } from 'chai'
import Page from '../test/pageobjects/page'
import {
    PAGE_TITLE, FACTORIAL_RESULT, TERMS_CONDITIONS_TITLE, PRIVACY_TITLE
} from '../constants/RESPONSES';
import Index from '../test/pageobjects/index.page';
import TermsConditions from '../test/pageobjects/termConditions.page';
import Privacy from '../test/pageobjects/privacy.page';

describe('Factorial calculator', () => {
    beforeEach(() => {
        Page.open()
    })

    it('Must Navigate the Application', () => {
        expect(Index.getTitle()).to.equal(PAGE_TITLE)

        Index.accessTermConditions();
        expect(TermsConditions.getTitle()).to.equal(TERMS_CONDITIONS_TITLE)

        Page.open() // Return to initial page

        Index.accessPrivacy()
        expect(Privacy.getTitle()).to.equal(PRIVACY_TITLE)
    })

    it('Must calculate a factorial for the number', () => {
        const randomNumber = Index.randomNumber(0,170);
        Index.sendNumber(randomNumber);
        Index.clickCalculate();
        const regex = new RegExp(FACTORIAL_RESULT(randomNumber))
        assert.match(Index.getResult(), regex)
    })
});
