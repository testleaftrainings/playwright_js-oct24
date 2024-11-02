import {test} from '@playwright/test'

test(`Learning playwright locator`,async({page})=>{

   await page.goto("http://leaftaps.com/opentaps/control/main")  

   const credentials= page.locator(".inputLogin")  //it gets all the matching elements with this locator value
   //Indexing
   //use index -> nth() -->starts with 0
    //first()/last()
   //await page.getByLabel("Username").fill("demoSalesManager") 
      await credentials.nth(0).fill("demoSalesManager")
      await credentials.first().fill("demoSalesManager")
      await credentials.last().fill("crmsfa")
      await page.locator(".decorativeSubmi").click({timeout:40000})   
//to click the CRMSFA  
   //await page.getByText("CRM/SFA").click()
    await page.getByRole("link",{name:"CRM/SFA"}).click()
       //  await page.getByPlaceholder("Search Setup").fill() 
   //pause for execution for 3s to visualize the above part
   await page.waitForTimeout(3000)
})