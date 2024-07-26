import BasePage from "../../framework/page/BasePage.js";
import { Label, Button, Input, Dropdown, Checkbox, Table, ElementsList } from "../../framework/elements/index.js";

class MainPage extends BasePage {

    constructor() {
        super(new Label('//div[@class="featured-locations"]'));

        this.consentButton = new Button('//div[contains(@class, "policy-accept")]', 'Consent data usage');
        this.searchResultPlaceholder = new Input('//input[@placeholder="Search your Address, City or Zip Code"]', 'Select search placeholder to write');
        this.resultList = new Label('//div[@class="search-results"]//div[@class="results-container"]', 'Search results list');
        this.firstSearchResult = new Label('div.results-container > div.search-bar-result:first-of-type', 'Select the first result from the dropdown');
        this.firstCity = new Label('div.featured-locations a:first-of-type', 'Select the featured location');
        this.currentLocation = new Label('//div[@class="search-bar-result current-location-result"]', 'Current Location Tab');
    }

    async acceptConsentButton() {
        await this.consentButton.state().waitForClickable();
        await this.consentButton.click();
    }

    async clickSearchField() {
        await this.searchResultPlaceholder.click();
    }

    async searchCity(city) {
        await this.searchResultPlaceholder.typeTextWithClear(city);
    }
    
    async resultListDisplayed() {
        return await this.resultList.state().waitForDisplayed();
    }

    async clickFirstResult() {
        await this.firstSearchResult.state().waitForDisplayed();
        await this.firstSearchResult.click();
    }

    async clickFirstCityRecentLocations() {
        await this.firstCity.click();
    }

    async isLocationLabelDisplayed() {
        return await this.currentLocation.state().waitForDisplayed();
    }
}

export default new MainPage();