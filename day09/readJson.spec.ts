
import test from "@playwright/test"
import loginData from "../../data/login.json"
import fs from 'fs'
import path from "path"

//const credentials=JSON.parse(fs.readFileSync(path.join(__dirname,"./data/login.json"),'utf-8'))

test(`Read json data`,async({page})=>{
    for(let eachData of loginData){
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.fill("#username",eachData.username)
    await page.fill("#password",eachData.password)
    await page.click(".decorativeSubmit")    
    }
})

//tsc --init