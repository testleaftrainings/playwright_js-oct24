import test from '@playwright/test'
import { parse } from 'csv-parse/sync'
import fs from 'fs'
import path from 'path'

let loginData:any[]
test.beforeAll(`Read testdata from the file`,async()=>{
 loginData=parse(fs.readFileSync(path.join(__dirname,"../.././data/loginCredentials.csv"),'utf8'),{
    columns:true,
    skip_empty_lines:true
  })   
   console.log(loginData)
})

test.use({storageState:'creds/ltsession.json',headless:false})
test.beforeEach("Executes before each test",async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/login") 
})

test(`HomePage test`,async({page})=>{
    await page.click("[text=CRM/SFA]")
})

test(`Leads test`,async({page})=>{
        await page.click("text=CRM/SFA")
   console.log( await page.title())
})

test.afterEach(`Logging defect in jira`,async()=>{
    console.log("Logging the defect in jira")
})

test.afterAll(`Update the report`,async()=>{
    console.log("Uploading document for reference")
})

