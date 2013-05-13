
var stepDefinitionsWrapper = function() {
    this.World = require("../support/world.js").World;
    
    this.Given(/^we point browser to "([^"]*)" address$/, function(url, callback) {
        this.visit(url, callback);
    });

    this.When(/^I browse the page$/, function(callback) {
        callback();
    });

    this.Then(/^I see words "([^"]*)"$/, function(text, callback) {
        this.assertHasText(text, callback); 
    });

    this.Then(/^I close the browser$/, function(callback) {
        this.close();
        callback();
    });


};

module.exports = stepDefinitionsWrapper;
