//create fixture for the login page

import {test } from '@playwright/test'

export const loginFixture=test.extend(
    {
    myfixture:async({page},use)=>{
    await page.goto("http://leaftaps.com/opentaps/control/main") 
    await page.fill("#username","demoSalesManager")
    await page.fill("#password","crmsfa")
    await page.click(".decorativeSubmit")
    use(page);
  },

  homePage:async({page},use)=>{

    }


})


