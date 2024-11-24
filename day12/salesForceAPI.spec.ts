import { faker } from '@faker-js/faker'
import test from '@playwright/test'

let actoken: any
let insturl: any
let leadId: any
let lastname: any

let lname = faker.person.lastName()
let cname = faker.company.buzzNoun()

test.describe.serial("Salesforce lead creation", async () => {
    test("Generate Token", async ({ request }) => {
        const start_time = performance.now()
        const response = await request.post("https://login.salesforce.com/services/oauth2/token", {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Connection": "keep-alive"
            },
            form: {
                "grant_type": "password",
                "client_id": "3MVG95mg0lk4bathv4oYb772GRC3bVxW1Es_Q3iIRRNR8SK5ApA.LJbPT96HpWJInRGniHTbF.cUq2.uJatoV",
                "client_secret": "149569A62384820C94E7FCB265BEFEC659DE02AD4E4D4BAEE95A354329BCD654",
                "username": "vidyar@testleaf.com",
                "password": "Sales@123"
            }
        })

        const tokenResponse = await response.json();
        actoken = tokenResponse.access_token
        insturl = tokenResponse.instance_url
        console.log("The generated token is " + actoken)
        console.log("The instance url is " + insturl)
        const end_time = performance.now()
        const pertest = end_time - start_time
        console.log(pertest)
    })


    test(`Creating the salesforce lead`, async ({ request }) => {
        const response = await request.post(`${insturl}/services/data/v62.0/sobjects/Lead`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${actoken}`
            },
            data: {
                "lastname": lname,
                "company": cname
            }
        })
        const createdLead = await response.json()
        console.log(createdLead)
        leadId = createdLead.id
    })

    test(`Get the specific salesforce lead data`, async ({ request }) => {
        const response = await request.get(`${insturl}/services/data/v62.0/sobjects/Lead/${leadId}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${actoken}`
            }
        })
        const getSpecificLeadData = await response.json()
        lastname = getSpecificLeadData.LastName
        console.log(getSpecificLeadData.LastName)
    })











})