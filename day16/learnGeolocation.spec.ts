import test, { chromium, devices } from '@playwright/test'


test.use({geolocation: {latitude:46.2,longitude:2.21},
    
    permissions:['geolocation'],

})
test(`To mock the location`,async({page})=>{

    // const browser=await chromium.launch()
    // const context=await browser.newContext({
    //     geolocation:{
    //         latitude:55.9533,
    //         longitude:3.1883
    //     },permissions:['geolocation']
    // })
    // const page=await context.newPage()
    await page.goto("https://www.google.com/maps")
    await page.waitForLoadState('domcontentloaded')
    await page.locator("#sVuEFc").click()
    await page.waitForTimeout(10000)
})