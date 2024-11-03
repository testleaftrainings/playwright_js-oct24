import test, { expect } from '@playwright/test'

test(`Learning Non- retrying`,async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")

    await page.locator("//input[@id='username']").fill("demoSalesManager")

    await page.locator("(//input[@class='inputLogin'])[2]").fill("crmsfa")

    await page.locator("//input[@type='submit']").click();

   //assert the page title

   const title=await page.title()

   expect(title).toContain("Leaftaps") //non retrying   
   expect(page).toHaveTitle("Leaftaps")

})


test.only(`Learning Auto retrying`,async({page})=>{

    await page.goto("https://www.leafground.com/input.xhtml")
    const textField= page.getByPlaceholder("Babu Manickam")
   //assert the page titl 
   expect(textField).toBeDisabled()// retrying

   

})