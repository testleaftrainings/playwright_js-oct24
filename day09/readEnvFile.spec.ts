import test from '@playwright/test'
import dotenv from 'dotenv'
import path from 'path'


dotenv.config({path:path.resolve(__dirname,"../../data/Prod.env")})
//C:\Users\Vidyabharathi R\OneDrive - TestLeaf Software Solutions Private Limited\PlaywrightWorkspace\Playwright_OCT\data\Prod.env
test(`Read Env file`,async()=>{   
    const user=process.env.LT_Username as string
    console.log(user)
})