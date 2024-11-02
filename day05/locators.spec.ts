import {test} from '@playwright/test'

test(`Learning basic locator`,async({page})=>{

   await page.goto("http://leaftaps.com/opentaps/control/main")
   //locating username text box and type in it
   await page.locator("#username").fill("demoSalesManager")

   //loacting the password textbox and type in

   const username= page.locator("#password")
   await username.hover()
   await username.fill("crmsfa")

   //click the login button

   await page.locator(".decorativeSubmit").click()

   

   //pause for execution for 3s to visualize the above part
   await page.waitForTimeout(3000)



})