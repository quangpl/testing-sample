// Load dependecies
var assert = require("chai").assert,
  test = require("selenium-webdriver/testing"),
  webdriver = require("selenium-webdriver");
const URL = "http://127.0.0.1:5500/";
// Our test

describe("Test title", function() {
  it('Title should be "Home Page"', function() {
    // Set timeout to 10 seconds
    this.timeout(10000);

    var driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.chrome())
      .build();

    // Go to URL
    driver.get(URL);

    // Find title and assert
    driver.executeScript("return document.title").then(function(return_value) {
      assert.equal(return_value, "Home Page");
    });

    // Quit webdriver
    driver.quit();
  });
});

describe("Test logo text", function() {
  it('Logo text should be "EZLIFE"', function() {
    // Set timeout to 10 seconds
    this.timeout(10000);

    var driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.chrome())
      .build();

    // Go to URL
    driver.get(URL);

    driver
      .executeScript(function() {
        return document.getElementById("logo-text").innerHTML;
      })
      .then(function(data) {
        assert.equal(data, "EZLIFE");
      });
    // Quit webdriver
    driver.quit();
  });
});

describe("Test header title", function() {
  it('Header title should be "My First Home Page"', function() {
    // Set timeout to 10 seconds
    this.timeout(10000);

    var driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.chrome())
      .build();

    // Go to URL
    driver.get(URL);

    driver
      .executeScript(function() {
        return document.getElementById("header-title").innerHTML;
      })
      .then(function(data) {
        assert.equal(data, "My First Home Page");
      });
    // Quit webdriver
    driver.quit();
  });
});

describe("Test search input", function() {
  it("Search textbox can be enter", function() {
    // Set timeout to 10 seconds
    this.timeout(10000);

    var driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.chrome())
      .build();

    // Go to URL
    driver.get(URL);
    driver.findElement({ id: "search-input" }).sendKeys("something");
    // Quit webdriver
    driver.quit();
  });
});

