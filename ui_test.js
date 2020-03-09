require("chromedriver");
const assert = require("assert");
const {Builder, Key, By, until} = require("selenium-webdriver");

let driver;

describe("Check Send Button", () => {
    let input;
    let send_button;
    before(async function () {
        driver = await new Builder().forBrowser("chrome").build();
        await driver.get("http://localhost:3000");
        await driver.wait(until.elementLocated(By.className('chat-input__send')), 10000);
        input = await driver.findElement(By.className("chat-input__message"));
        send_button =  await driver.findElement(By.className("chat-input__send"));
    });
 
    it("input is null", async function () {
        await input.click();
        assert.equal(await send_button.isEnabled(), false);
    });

    it("input is /start", async function () {
        await input.click();
        await input.sendKeys("/start");
        assert.equal(await send_button.isEnabled(), true);
    });
    it("input animation check", async () => {
        await driver.wait(until.elementLocated(By.className('message__dot')), 1000);
        assert.equal(await driver.findElement(By.className("animation-wave")).getText(), '.');
    });
    after(() => driver.quit());
});

