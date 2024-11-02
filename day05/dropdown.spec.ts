import test from "@playwright/test";

test(`Learning Dropdown`,async({page})=>{
    
  await page.goto("https://www.leafground.com/select.xhtml")

  // handle dropdown -->step:1 confirm the element is having <select>
  //step:2 -->use the selectOption

 await page.selectOption("select.ui-selectonemenu",{label:"Playwright"})

await page.waitForTimeout(3000)

 await page.selectOption("select.ui-selectonemenu",{value:"Selenium"})
//parent child relation
const DD= page.locator("//select[@class='ui-selectonemenu']/option")
const count=await DD.count()
await DD.nth(3).click() 
//retreives all the options
const allOptions=await DD.allInnerTexts()

//await page.selectOption("select.ui-selectonemenu",{index:count-1})

})