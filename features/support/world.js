var WebdriverJS = require('webdriverjs');
var expect = require("chai").expect;

var World = function World(callback) {
    var options = {
        desiredCababilities: {
            browserName: "phantomjs"
        }
    };
    var client = WebdriverJS.remote(options);
    client.init();
    var world = {
        visit: function(url, callback) {
            client.url(url).call(callback);
        },
        close: function(callback) {
            client.end(callback);
        },
        assertHasText: function(text, callback) {
            client.getSource(function(err, result) {
                expect(result).to.contain(text);
                callback();
            });
        }
    };

    callback(world);
};

exports.World = World; 
