import test,{chromium, firefox, webkit} from '@playwright/test'

test('Launching the chrome browser',async()=>{
//connect the chromium
   const browser= await chromium.launch({channel:"msedge",headless:false})
//to launch the window(Context)
   const context=await browser.newContext();
   //launch page/tab
   const page=await context.newPage()
 //load the application
   await page.goto("http://leaftaps.com/opentaps/control/main")
   await page.goto("http://www.google.com")
   //to verify the title of the page
   const title=await page.title()
   const url=page.url()

})


// test('Launching the firefox browser',async()=>{
//     //connect the chromium
//        const browser= await firefox.launch()
//     //to launch the window(Context)
//        const context=await browser.newContext();
//        //launch page/tab
//        const page=await context.newPage()
//      //load the application
//        await page.goto("http://leaftaps.com/opentaps/control/main")
//        await page.goto("http://www.google.com")

    
//     }) 

    

// test('Launching the webkit browser',async()=>{
//     //connect the chromium
//        const browser= await webkit.launch()
//     //to launch the window(Context)
//        const context=await browser.newContext();
//        //launch page/tab
//        const page=await context.newPage()
//      //load the application
//        await page.goto("http://leaftaps.com/opentaps/control/main")
//        await page.goto("http://www.google.com")
    
//     })

