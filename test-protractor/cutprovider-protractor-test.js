var Eyes = require('../index').Eyes;
var ConsoleLogHandler = require('../index').ConsoleLogHandler;
var FixedCutProvider = require('../index').FixedCutProvider;

var eyes;

describe("Eyes.Selenium.JavaScript - cutprovider", function() {

    beforeAll(function(){
        eyes = new Eyes();
        eyes.setApiKey(process.env.APPLITOOLS_API_KEY);
        eyes.setLogHandler(new ConsoleLogHandler(true));
    });

    beforeEach(function(done){
        eyes.open(browser, global.appName, global.testName, {width: 1000, height: 700}).then(function () {
            done();
        });
    });

    it("TestHtmlPages with ImageCut", function(done) {
        browser.get('https://astappev.github.io/test-html-pages/');

        // cut params: header, footer, left, right.
        eyes.setImageCut(new FixedCutProvider(60, 100, 50, 120));

        eyes.checkWindow("Entire window with cut borders");

        eyes.close().then(function () {
            done();
        });
    });

    afterEach(function(done) {
        eyes.abortIfNotClosed().then(function () {
            done();
        });
    });
});
