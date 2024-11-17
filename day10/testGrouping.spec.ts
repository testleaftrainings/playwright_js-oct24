import test from '@playwright/test'

test.describe(`Group my testcases`,{tag:'@smoke'},()=>{
   // test.describe.configure()
    test(`Login Functionality`,async({page},testInfo)=>{

        testInfo.annotations.push(
           { type:"Author",description:"Ramya"},
            {type:"Test Title",description:"Test On Login Functionality"})
    await page.goto("http://leaftaps.com/opentaps/control/main") 
    await page.fill("#usernam","demoSalesManager")
    await page.fill("#password","crmsfa")
    await page.click(".decorativeSubmit")
})

test(`Login Functionality for sequential`,async({page},testInfo)=>{
    testInfo.annotations.push(
        { type:"Author",description:"Ramya"},
         {type:"Test Title",description:"Test On Sequential Execution"})
    await page.goto("http://leaftaps.com/opentaps/control/main") 
    await page.fill("#username","demoSalesManager")
    await page.fill("#password","crmsfa")
    await page.click(".decorativeSubmit")
})
    
})

test.describe.only(`Group my testcases for serial`,{tag:'@regression'},()=>{
 
    //tests are grouped -->but i need to configure for parallel/serial/sequential
  test.describe.configure({mode:'serial',retries:2})//inject dependency between the tests under the group
    test(`Login Functionality for serial mode`,async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.fill("#usernam","demoSalesManager")
    await page.fill("#password","crmsfa")
    await page.click(".decorativeSubmit")

})

test(`Login Functionality test 2`,async({page})=>{  
    await page.goto("http://leaftaps.com/opentaps/control/main") 
    await page.fill("#username","demoSalesManage")
    await page.fill("#password","crmsfa")
    await page.click(".decorativeSubmit")
})

test(`Login Functionality test 3`,async({page})=>{  
    await page.goto("http://leaftaps.com/opentaps/control/main") 
    await page.fill("#username","demoCSR")
    await page.fill("#password","crmsfa")
    await page.click(".decorativeSubmit")
})

})

