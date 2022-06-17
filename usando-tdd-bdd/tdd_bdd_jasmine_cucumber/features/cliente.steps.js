const assert = require('assert');
const {Given, When, Then} = require('cucumber');

const path = require('path');
const {ServiceBuilder} = require('selenium-webdriver/chrome');
const {Builder, By, Key, until} = require('selenium-webdriver');

const pathDriver = "/Pessoal/Projects/AprendendoNode/usando-jasmine/tdd_bdd_jasmine_cucumber/driver/chromedriver.exe"
const serviceBuilder = new ServiceBuilder(pathDriver);

const driver = new Builder().forBrowser('chrome').setChromeService(serviceBuilder).build();

Given('I\'m have {string} clients in my database', function (string) {
    console.log("Dados inseridos no BD")
});

When('I access the home webpage', async () => {
    await driver.get('http://localhost:3000/')
    await driver.sleep(1000)
});

Then('See the List of {string} items', async function (string) {
    let qtd = await driver.findElements(By.css('tbody tr'))
    assert.equal(qtd.length, parseInt(string))
    await driver.quit()
});