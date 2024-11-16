import test from '@playwright/test'
import dotenv from 'dotenv'
import path from 'path'

const envFile=process.env.envDataFile ||'staging' //qa -->default
dotenv.config({path:path.resolve(__dirname,`../../data/${envFile}.env`)})
//C:\Users\Vidyabharathi R\OneDrive - TestLeaf Software Solutions Private Limited\PlaywrightWorkspace\Playwright_OCT\data\Prod.env
test(`Read Env file`,async({page})=>{   
    const user=process.env.LT_Username as string
    const pwd=process.env.LT_Password as string
    console.log(process.env.BaseUrl as string)
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.fill("#username",user)
    await page.fill("#password",pwd)
    await page.click(".decorativeSubmit")   
})