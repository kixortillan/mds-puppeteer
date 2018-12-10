const puppeteer = require('puppeteer');

(async () => {
  console.log('Start...');
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: '/opt/google/chrome/chrome'
  });
  const page = await browser.newPage();
  await page.goto('http://10.219.4.27:20008/provision/');
  await page.waitFor('input[name=username]');
  await page.$eval('input[name=username]', el => el.value = 'mdspphp1');
  await page.$eval('input[name=password]', el => el.value = 'PRov+-12');
  await page.click('input[type="submit"]');
  await browser.close();
  console.log('End...');
})();