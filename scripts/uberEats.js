const puppeteer = require('puppeteer');


uberEatsInformationScraper = (address) => {
    (async() => {
        const uberEatsUrl = 'https://www.ubereats.com';

        //launch puppeteer and open new tab
        let browser = await puppeteer.launch({ headless: false });
        let page = await browser.newPage();

        //control render size
        await page.setViewport({ width: 1200, height: 1000 });

        //sends puppeteer to the url and waits until everything is rendered
        await page.goto(uberEatsUrl), { waitUntil: 'networkidle2' };

        //input address
        await page.type('#location-typeahead-home-input', address);

        //submit address
        await page.waitForTimeout(1000);
        let submit = (await page.$$('button'))[2];
        await submit.click();
        await page.waitForTimeout(4000);

        await page.evaluate(() => {

        })

        //close puppeteer
        await browser.close()

    })();
};


uberEatsInformationScraper("8646 Chestnut Circle 64131");