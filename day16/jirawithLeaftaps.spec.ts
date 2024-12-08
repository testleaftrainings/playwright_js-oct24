import test, { TestInfo } from '@playwright/test'
import { createISsue } from './jiraIntegration'
import { defectConfig } from './logadefect'
test(`Login functionality with jira implementation`,async({page},testInfo)=>{
    testInfo.annotations.push(
       {type:"Author",description:"Vidya"},
       {type:"Bug", description:"Failed due to appl issue"},
       {type:"TestCase_id",description:"TC001"}
    )
    await page.goto("http://leaftaps.com/opentaps/control/main") 
    await page.fill("#username","demoSalesManager")
    await page.fill("#password","crmsfa")
    await page.click(".decorativeSubm")
    //createISsue(testInfo.title,"error info")
   
})

test.afterEach(`Loging defect in jira`,async({},testInfo:TestInfo)=>{
  await defectConfig(testInfo)
})