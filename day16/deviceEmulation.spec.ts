import test, { devices, TestInfo } from '@playwright/test'


test.use({...devices['BlackBerry Z30 landscape']})
test(`Login functionality with deviceEmulation`,async({page},testInfo)=>{
    testInfo.annotations.push(
       {type:"Author",description:"Vidya"},
       {type:"TestCase_id",description:"TC001"}
    )
    await page.goto("http://leaftaps.com/opentaps/control/main") 
    await page.fill("#username","demoSalesManager")
    await page.fill("#password","crmsfa")
    await page.click(".decorativeSubmit")
    await page.waitForTimeout(3000)
    //createISsue(testInfo.title,"error info")
   
})

test.use({viewport:{ height:1200, width:678}})
test(`Login functionality with viewport`,async({page},testInfo)=>{
    testInfo.annotations.push(
       {type:"Author",description:"Vidya"},
       {type:"TestCase_id",description:"TC001"}
    )
    await page.goto("http://leaftaps.com/opentaps/control/main") 
    await page.fill("#username","demoSalesManager")
    await page.fill("#password","crmsfa")
    await page.click(".decorativeSubmit")
    await page.waitForTimeout(3000)
    //createISsue(testInfo.title,"error info")
   
})