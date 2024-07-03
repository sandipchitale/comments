const puppeteer = require('puppeteer');

(async () => {
    async function logSrc(page, img) {
        const src = await page.evaluate(el => el.getAttribute("src"), img);
        console.log(src);
    }

    async function autoScroll(page){
        await page.evaluate(async () => {
            await new Promise((resolve) => {
                let totalHeight = 0;
                let distance = 100;
                let timer = setInterval(() => {
                    let scrollHeight = document.body.scrollHeight;
                    window.scrollBy(0, distance);
                    totalHeight += distance;

                    if(totalHeight >= scrollHeight - window.innerHeight){
                        clearInterval(timer);
                        resolve();
                    }
                }, 2000);
            });
        });
    }

    // Connect to desktop browser
    const browser = await puppeteer.connect({
        browserURL: 'http://127.0.0.1:9222',
        defaultViewport: null
    });
    const page = await browser.newPage();

    // Navigate the page to a URL
    await page.goto('https://myactivity.google.com/page?hl=en&utm_medium=web&utm_source=youtube&page=youtube_comments');

    await page.waitForSelector('img[alt|="Logo for YouTube"')

    await autoScroll(page);
})();
