import test from '@playwright/test'
import { parse } from 'csv-parse/sync'
import path from 'path'
import fs from 'fs'

const loginData=parse(fs.readFileSync(path.join(__dirname,"../.././data/loginCredentials.csv"),'utf8'),{
  columns:true,
  skip_empty_lines:true
})

for(let data of loginData){
test.only(`Read CSV data ${data.dataCount}`,async({page})=>{
   
    await page.goto("http://leaftaps.com/opentaps/control/main")  
    await page.fill("#username",data.Username)
    await page.fill("#password",data.Password)
    await page.click(".decorativeSubmit")    
    
})}

// loginData.forEach(eachRow => {
//     eachRow.testCaseid -->row-1 column1

// });

test(`Read CSV data for ${loginData[1].dataCount}`,async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.fill("#username",loginData[1].Username)
    await page.fill("#password",loginData[1].Password)
    await page.click(".decorativeSubmit")    
})
