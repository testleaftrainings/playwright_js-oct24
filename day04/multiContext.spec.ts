import test, { chromium } from "@playwright/test";

test(`Multi context and page`,async()=>{
    
   const browser= await chromium.launch({headless:false})
   const context1=await browser.newContext()
    const page=await context1.newPage()
    const page1= await context1.newPage()


    const context2=await browser.newContext()
    const page3=await context2.newPage()

    await page.waitForTimeout(3000) //explicit wait

    // await page3.close() //clean the resources of page
    // await page1.close() //clean the resources at the page levekl

    // await context1.close()//clean the resource at the context level

   //  await browser.close()//browser level resources cleared

})