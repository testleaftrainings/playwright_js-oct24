import { TestInfo } from "@playwright/test";
import { createISsue } from "./jiraIntegration";


export async function defectConfig(testinfo:TestInfo){

    if(testinfo.status=="timedOut"||testinfo.status=="failed"){
        const summary=`The ${testinfo.title} is failed`
        const description=`The error is due to ${testinfo.error}`
        createISsue(summary,description)
    }
}