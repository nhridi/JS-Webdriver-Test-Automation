import { Given, When, Then } from "@wdio/cucumber-framework";
import mainPage from '../pageobjects/mainPage.js';
import { assert } from 'chai';

Given(/^I open the Main Page$/, async () => {
    assert.isTrue(await mainPage.isPageOpened(), 'AccuWeather main page is not displayed');
});

When(/^I consent data Usage$/, async () => {
    await mainPage.acceptConsentButton();
});

When(/^I click search field$/, async () => {
    await mainPage.clickSearchField();
})

When(/^I input "(.+)" in the search field$/, async (city) => {
    await mainPage.searchCity(city);
});

Then(/^I see a list of city$/, async() =>{
    assert.isTrue(await mainPage.isResultListDisplayed(), 'List of City is not displayed');
})

When(/^I click on the first search result$/, async () => {
    await mainPage.clickFirstResult();
});

When(/^I choose the first city in Recent locations.$/, async () => {
    await mainPage.clickFirstCityRecentLocations();
});

Then(/^I see the current location label$/, async () => {
    assert.isTrue(await mainPage.isLocationLabelDisplayed(), 'Location Label is not displayed');
});