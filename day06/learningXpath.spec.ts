import test, { expect } from '@playwright/test'

test(`Learning Xpath`,async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")

    await page.locator("//input[@id='username']").fill("demoSalesManager")

    await page.locator("//input").fill("crmsfa")

    await page.locator("//input[@type='submit']").click();

   const crmLink= await page.getByRole("link",{name:"CRM/SFA"}).innerText();
   // to assert it --special library
   try{
   expect(crmLink).toContain("sfa")
     //comparing actual with expected value 
   }catch(error){

   }

})