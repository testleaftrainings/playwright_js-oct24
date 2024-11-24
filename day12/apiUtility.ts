
import { r } from "@faker-js/faker/dist/airline-BLb3y-7w";
import { APIRequestContext, chromium } from "@playwright/test";

let leadId:any
let lastname:any
export async function generateToken(request:APIRequestContext){  //request:APIRequestContext
//   const browser=await chromium.launch()
//   const context=await browser.newContext()
//   const page=await context.newPage()
//   const request=page.request;
   
  const response=await request.post("https://login.salesforce.com/services/oauth2/token",{
        headers:{
            "Content-Type":"application/x-www-form-urlencoded",
            "Connection":"keep-alive"
        },
        form:{
            "grant_type":"password",
            "client_id":"3MVG95mg0lk4bathv4oYb772GRC3bVxW1Es_Q3iIRRNR8SK5ApA.LJbPT96HpWJInRGniHTbF.cUq2.uJatoV",
            "client_secret":"149569A62384820C94E7FCB265BEFEC659DE02AD4E4D4BAEE95A354329BCD654",
            "username":"vidyar@testleaf.com",
            "password":"Sales@123"
     }  
    
    })
     const genToken=await response.json()
     return {
        acToken:genToken.access_token,
        url:genToken.instance_url
         }
}
//generateToken().url


export async function createResource(request:APIRequestContext,lname:string,cname:string){

     const response=await request.post(`${(await generateToken(request)).url}/services/data/v62.0/sobjects/Lead`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${((await generateToken(request)).acToken)}`
        },
        data:{
            "lastname":lname,
            "company":cname
        }
     })
   const createlead=await response.json()
   console.log(createlead)
   leadId=createlead.id
   return leadId
}


export async function getResource(request:APIRequestContext){

    const response=await request.get(`${(await generateToken(request)).url}//services/data/v62.0/sobjects/Lead/${leadId}`,{
       headers:{
           "Content-Type":"application/json",
           "Authorization":`Bearer ${((await generateToken(request)).acToken)}`
       }      
    })
  const getLeadData=await response.json()
  console.log(getLeadData)
  lastname=getLeadData.LastName
  console.log(lastname)
  return lastname
}
