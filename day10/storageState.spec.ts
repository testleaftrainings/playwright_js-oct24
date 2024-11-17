import test from '@playwright/test'
test(`Login functionality`,async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main") 
    await page.fill("#username","demoSalesManager")
    await page.fill("#password","crmsfa")
    await page.click(".decorativeSubmit")
    await page.context().storageState({path:"creds/ltsession.json"})
})