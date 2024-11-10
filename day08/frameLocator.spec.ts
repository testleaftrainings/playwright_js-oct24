import test from "@playwright/test"

test.only(`Handling frame Locator`, async ({ page }) => {
    await page.goto("https://www.leafground.com/frame.xhtml")
    //to count the frames in the page
    await page.frameLocator("(//iframe)[1]").locator("#Click").click()
    const nestedFrameEle = page.frameLocator("(//iframe)[3]").frameLocator("#frame2")
        .locator("#Click")
    console.log(await nestedFrameEle.innerText())
    await nestedFrameEle.click()
    console.log(await nestedFrameEle.innerText())
    //arrOfFrame=page.frames()
    //frame4=arrOFFrame[4]
    //frame4.frmaeLocator("#iframe").click()
    //const frmaeEle= page.frameLocator("[title='dashboard']")
    //await frameEle.locator(#dashboardNameInput).fill()
    //await frameEle.locator(#dashboardDescriptionInput).fill()
    //await page.locator("text=Contacts").clcik()
})  