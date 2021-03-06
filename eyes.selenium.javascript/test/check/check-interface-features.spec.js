const { Builder, By } = require('selenium-webdriver');
const { ConsoleLogHandler, MatchLevel, Region, RectangleSize, FloatingMatchSettings } = require('@applitools/eyes.sdk.core');
const { Eyes, Target } = require('../../index');

let driver = null, eyes = null;
describe('Eyes.Selenium.JavaScript - check-interface-features', () => {

    before(function () {
        driver = new Builder()
            .forBrowser('chrome')
            .usingServer('http://localhost:4444/wd/hub')
            .build();

        eyes = new Eyes();
        eyes.setApiKey(process.env.APPLITOOLS_API_KEY);
        eyes.setLogHandler(new ConsoleLogHandler(true));
    });

    it("test check interface features", function () {
        return eyes.open(driver, this.test.parent.title, this.test.title, new RectangleSize(1000, 700)).then(driver => {
            driver.get("https://astappev.github.io/test-html-pages/");

            // Entire window, equivalent to eyes.checkWindow()
            eyes.check("Entire window", Target.window()
                .matchLevel(MatchLevel.Layout)
                .ignore(By.id("overflowing-div"))
                .ignore(driver.findElement(By.name("frame1")))
                .ignores(new Region(400, 100, 50, 50), new Region(400, 200, 50, 100))
                .floating(new FloatingMatchSettings(500, 100, 75, 100, 25, 10, 30, 15))
                .floating(By.id("overflowing-div-image"), 5, 25, 10, 25)
            );

            // Region by rect, equivalent to eyes.checkFrame()
            eyes.check("Region by rect", Target.region(new Region(50, 50, 200, 200))
                .floating(new FloatingMatchSettings(50, 50, 60, 50, 10, 10, 10, 10))
            );

            return eyes.close();
        });
    });

    afterEach(function () {
        return driver.quit().then(() => eyes.abortIfNotClosed());
    });
});
