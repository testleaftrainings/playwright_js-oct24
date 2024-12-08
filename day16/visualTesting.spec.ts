import test, { expect } from '@playwright/test'

test(`Visual comparision`,async({page})=>{

    await page.goto("https://www.testleaf.com/")
    const screenshot=await page.screenshot()
    expect(screenshot).toMatchSnapshot('testleaf.png')
})