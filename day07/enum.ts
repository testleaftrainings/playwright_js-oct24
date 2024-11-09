enum responsStatus{ //default value is zero will be assigned first available data
    pass=1,
    fail,
    pending
}

console.log(responseStatus.pass)

console.log(responseStatus.fail)

//dev,user,hr,qa

enum browserType{
    browser3,//value is not declared 
    browser=4,
    browser4="",
    browser1="chrome",
    browser2="firefox",  

}

console.log(browserType.browser3)
console.log(browserType.browser4)