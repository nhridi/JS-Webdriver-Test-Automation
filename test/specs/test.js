import mainPage from '../pageobjects/mainPage.js';

describe('AccuWeather Test Suite', () => {
    it('consenting to data usage and allow cookie',async () => {
        await mainPage.acceptConsentButton();
    });
});

describe('accuWeather Search Suite', () => {
    it('click on the search box and write "New York"', async () => {
        await mainPage.searchCity();
    })
})

describe('accuWeather Select Suite', () => {
    it('select first element of the test result', async () => {
        await mainPage.clickFirstresult();
    })
})
