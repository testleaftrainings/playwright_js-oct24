//endpoint
//username
//api key
//project id

import axios from "axios"

const endpoint="https://vidya-bharathi.atlassian.net/rest/api/2/issue"
const useremail="vidyar1926@gmail.com"
const apiKey="ATATT3xFfGF0fHFhN6EGXgTLfARLtRVrVCtj9vzK2ZbwMsTq9jDIhRNiLmR9R86mPmCPMfqecBz8IHWS3z-SvJ6aC2j2ZPyoA_0uMmJ-Q2wbvPTH-P1urpqKTjMhJL8iz7oatfucc4gPFxUhSvu-yZ29Dqi0LUh7QcOh5I4ZtZCIHD7uU0WphT0=69B39A80"
const projectId="OCT"


export async function createISsue(summary:string,description:string){

        const issueBody={
            "fields":{
                "project":{
                    "key":projectId
                },
                "summary":summary,
                "description":description,
                "issuetype":{
                    "name":"Bug"
                }
        }
    }
    const response=await axios.post(endpoint,issueBody,{
        headers:{
            "Content-Type":"application/json"
        },
        auth:{
            username:useremail,
            password:apiKey
        }
    })

console.log(response.status)
}

//createISsue("Logging the defect in jira","Through axios library")