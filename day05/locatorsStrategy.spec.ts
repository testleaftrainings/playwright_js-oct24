import {test} from '@playwright/test'

test(`Learning Locator strategy using CSS`,async({page})=>{

   await page.goto("http://leaftaps.com/opentaps/control/main")
   
   await page.locator("#username").fill("demoSalesManager")
   const username= page.locator("#password")
   await username.hover()
   await username.fill("crmsfa")
   await page.locator(".decorativeSubmit").click()

   // [attribute ='attributevalue']
  await page.locator("text=CRM/SFA").click({timeout:60000})   //action timeout 
//20 ele is available then it clicks and move on 
   //pause for execution for 3s to visualize the above part
   await page.waitForTimeout(3000)



})