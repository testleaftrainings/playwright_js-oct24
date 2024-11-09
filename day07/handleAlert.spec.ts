import test, { expect } from "@playwright/test";

test(`Handling alert without listener`, async ({ page }) => {
  await page.goto("https://www.leafground.com/alert.xhtml")
  //simple dilaog
  await page.locator("text=Show").first().click()
  // await page.locator("//h5[contains(text(),'Confirm Dialog')]/following-sibling::button/span[2]")
  //filterMechanism-locator chaining
  await page.locator(".card").filter({ hasText: "(Confirm Dialog)" })//.filter({has:page.locator("//h5[contains(text(),'Confirm Dialog')]})
    .locator("//span[text()='Show']").click()
})


test(`Handling alert with listener once`, async ({ page }) => {


  await page.goto("https://www.leafground.com/alert.xhtml")
  //simple dilaog
  await page.locator("text=Show").first().click()
  // await page.locator("//h5[contains(text(),'Confirm Dialog')]/following-sibling::button/span[2]")

  page.once('dialog', alertType => {
    const alertMessage = alertType.message()
    const dialogType = alertType.type()
    console.log(`${dialogType} having the message as ${alertMessage}`)
    alertType.accept("Vidya")
  })
  //filterMechanism-locator chaining
  await page.locator(".card").filter({ hasText: "(Confirm Dialog)" })//.filter({has:page.locator("//h5[contains(text(),'Confirm Dialog')]})
    .locator("//span[text()='Show']").click()
  expect(await page.locator("#result").innerText()).toContain("OK")
})

test.only(`Handling alert with listener on`, async ({ page }) => {
  await page.goto("https://www.leafground.com/alert.xhtml")
  //simple dilaog
  await page.locator("text=Show").first().click()
  // await page.locator("//h5[contains(text(),'Confirm Dialog')]/following-sibling::button/span[2]")

  //filterMechanism-locator chaining -confirmation
  await page.locator(".card").filter({ hasText: "(Confirm Dialog)" })//.filter({has:page.locator("//h5[contains(text(),'Confirm Dialog')]})
    .locator("//span[text()='Show']").click()
  expect(await page.locator("#result").innerText()).toContain("Cancel")

  //prmpt alert
  await page.locator(".card").filter({ hasText: "(Prompt Dialog)" })//.filter({has:page.locator("//h5[contains(text(),'Confirm Dialog')]})
    .locator("//span[text()='Show']").click()
  expect(await page.locator("#confirm_result").innerText()).toContain("User entered name as:")

})
