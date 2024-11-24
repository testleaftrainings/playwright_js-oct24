import test from "@playwright/test";
import { createResource, generateToken, getResource } from "./apiUtility";
import { faker } from "@faker-js/faker";

let lastname=faker.person.lastName() 
let compname=faker.company.buzzNoun()
let id:any
let searchname:any
test.beforeEach(`SalesForce lead Generation`,async({page})=>{
    await generateToken(page.request)
    id= await createResource(page.request,lastname,compname)
    searchname= await getResource(page.request)
})
test(`Salesforce using ui data verification`,async({page})=>{
    await page.goto("https://login.salesforce.com/")
    await page.fill("#username","vidyar@testleaf.com")
    await page.fill("#password","Sales@123")
    await page.click("#Login") 
    await page.waitForLoadState('load')
    await page.locator(".slds-icon-waffle").click();
    await page.locator("//button[text()='View All']") .click()
    await page.getByPlaceholder("Search apps or items...").fill("Leads")
    await page.locator("//mark[text()='Leads']").click()
    await page.waitForLoadState('load')
    await page.getByPlaceholder("Search this list...").fill(searchname,{timeout:20000})
})