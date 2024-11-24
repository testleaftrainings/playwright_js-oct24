import test, { expect } from '@playwright/test'


let sysUniqueId:any


test.describe.serial(`Servicenow Resource creation`,async()=>{
test(`Create incident using API Post method`,async({request})=>{

    const response=await request.post(`https://dev216320.service-now.com/api/now/table/change_request`,{
        headers:{
            "Content-Type":"application/json", //request -->
            "Authorization":"Basic YWRtaW46VVkybU9VZV43cEBm"  //admin:UY2mOUe^7p@f
        },
        data:{ //body
            "description":"Creating incident through pw api call"
        }
    })
        const incidentRespose=await response.json() //pm.response.json()
        console.log(response.status())
        console.log(incidentRespose.result.sys_id)
        sysUniqueId=incidentRespose.result.sys_id  //store the sys_id as global variable
        expect(response.status()).toBe(201)
        expect(response.statusText()).toBe("Created")
})

test(`Get the incident using API GET method`,async({request})=>{
    const response=await request.get(`https://dev216320.service-now.com/api/now/table/incident/${sysUniqueId}`,{
        headers:{
            "Content-Type":"application/json", //request -->
            "Authorization":"Basic YWRtaW46VVkybU9VZV43cEBm"  //admin:UY2mOUe^7p@f
        }      
    })
        const getspecificIncident=await response.json() //pm.response.json()
        console.log(response.status())
        console.log(getspecificIncident.result.number)
         //store the sys_id as global variable
        expect(response.status()).toBe(200)
        expect(response.statusText()).toBe("OK")
})


test(`Update the incident using API Patch method`,async({request})=>{
    const response=await request.patch(`https://dev216320.service-now.com/api/now/table/incident/${sysUniqueId}`,{
        headers:{
            "Content-Type":"application/json", //request -->
            "Authorization":"Basic YWRtaW46VVkybU9VZV43cEBm"  //admin:UY2mOUe^7p@f
        } ,
        data:
        {
            "short_description":"Updating the record using pw api"
        }     
    })
        const updatedspecificIncident=await response.json() //pm.response.json()
        console.log(response.status())     
         //store the sys_id as global variable
        expect(response.status()).toBe(200)
        expect(response.statusText()).toBe("OK")
        console.log(updatedspecificIncident)
})

test(`Delete the incident using API Delete method`,async({request})=>{
    const response=await request.delete(`https://dev216320.service-now.com/api/now/table/incident/${sysUniqueId}`,{
        headers:{
            "Content-Type":"application/json", //request -->
            "Authorization":"Basic YWRtaW46VVkybU9VZV43cEBm"  //admin:UY2mOUe^7p@f
        }         
    })
       // const deletedIncident=await response.json() //pm.response.json()
        console.log(response.status())     
         //store the sys_id as global variable
        expect(response.status()).toBe(204)
        expect(response.statusText()).toBe("No Content")
      
})






// test(`endto end`,async({page})=>{
//     //login step
//     //click all
//     //filter->incident
//     //serach ->incident number -->pass the value get from the api
// })



})

