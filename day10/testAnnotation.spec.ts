import {test} from '@playwright/test'

test.fixme(`Leaftaps Login needs to be fixed`,async({page})=>{    
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.fill("#username","demoCSR")
    await page.fill("#password","crmsfa")
    await page.click(".decorativeSubmit")    
})


test.skip(`Leaftaps Login with invalid credentials`,async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.fill("#username","demoCSR")
    await page.fill("#password","crmsfa1")
    await page.click(".decorativeSubmit")    
})

test(`Leaftaps Login with invalid data`,async({page},testInfo)=>{
    testInfo.annotations.push({type:"Author",description:"Deepak"})
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.fill("#username","demoCSR")
    await page.fill("#password","crmsfa1")
    await page.click(".decorativeSubmit")    
})


test.fail(`Leaftaps Login with empty field`,async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.fill("#usernam","demoCSR")
    await page.fill("#password","")
    await page.click(".decorativeSubmit")    
})

test.only(`Leaftaps Login with empty field with slow mode`,async({page})=>{
    test.slow() ;//3x time delay on default time applied between the actions
    //use it for debugging
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.fill("#usernam","demoCSR")
    await page.fill("#password","")
    await page.click(".decorativeSubmit")    
})
