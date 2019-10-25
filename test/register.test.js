// Load dependecies
var assert = require("chai").assert,
  test = require("selenium-webdriver/testing"),
  webdriver = require("selenium-webdriver");
const URL = "http://127.0.0.1:5500/register.html";
// Our test

describe("Test title", function() {
  it('Title should be "Register"', function() {
    // Set timeout to 10 seconds
    this.timeout(10000);

    var driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.chrome())
      .build();

    // Go to URL
    driver.get(URL);

    // Find title and assert
    driver.executeScript("return document.title").then(function(return_value) {
      assert.equal(return_value, "Register");
    });

    // Quit webdriver
    driver.quit();
  });
});

describe("Test header title", function() {
  it('Header title should be "REGISTER"', function() {
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
        assert.equal(data, "REGISTER");
      });
    // Quit webdriver
    driver.quit();
  });
});

describe("Test submit and fill out form", function() {
  it('Form should be fill', function() {
    // Set timeout to 10 seconds
    this.timeout(10000);

    var driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.chrome())
      .build();

    // Go to URL
    driver.get(URL);

     driver.findElement({ id: "submit-btn" }).then(function(el) {
       return el.click();
     });

     driver.findElement({ id: "name" }).then(function(el) {
       return el.sendKeys("John")
     });

     driver.findElement({ id: "email" }).then(function(el) {
        return el.sendKeys("abc@gmail.com");
     });

     driver.findElement({ id: "password" }).then(function(el) {
       return el.sendKeys("123");
     });


     driver.findElement({ id: "age" }).then(function(el) {
       return el.sendKeys("12");
     });

     driver.takeScreenshot(true);
    // Quit webdriver
    driver.quit();
  });
});


describe("Test input number for age field", function() {
  it("Age field shoule by enter by number", function() {
    // Set timeout to 10 seconds
    this.timeout(10000);

    var driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.chrome())
      .build();

    // Go to URL
    driver.get(URL);

    driver.findElement({ id: "age" }).then(function(el) {
      return el.sendKeys("abcasbcas")
    });
    // Quit webdriver
    // driver.quit();
  });
});


describe("Test input number for age field", function() {
  it("Age field shoule by enter by number", function() {
    // Set timeout to 10 seconds
    this.timeout(10000);

    var driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.chrome())
      .build();

    // Go to URL
    driver.get(URL);

    driver.findElement({ id: "age" }).then(function(el) {
      return el.sendKeys(12);
    });
    // Quit webdriver
    // driver.quit();
  });
});