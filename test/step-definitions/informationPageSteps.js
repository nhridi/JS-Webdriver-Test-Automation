import { Then } from "@wdio/cucumber-framework";
import informationPage from '../pageobjects/informationPage.js';
import { assert } from 'chai';

Then(/^The information page for "(.+)" is displayed$/, async () => {
    assert.isTrue(await informationPage.isPageOpened(), 'Information page is not displayed');
});