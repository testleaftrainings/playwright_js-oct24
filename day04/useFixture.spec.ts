import test from "@playwright/test";


test (`Learning fixtures`,async({page})=>{  
    await page.goto("http://www.google.com")
    const title=await page.title()
    console.log(title)
    console.log(page.url())
})