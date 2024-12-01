

class Browser{
    browserName: string
    browserVersion: string

    constructor(browser:string, version:string){
        this.browserName = browser
        this.browserVersion = version
        console.log(this.browserName)
        console.log(this.browserVersion)
    }
    openURL(){
        console.log("url opened in "+this.browserName)
    }
    
    closeBrowser(){
        console.log("browser closed in "+this.browserName)
    }
    
    navigateBack(){
        console.log("navigated back in "+this.browserName)
    }

}

class Chrome extends Browser{
    constructor(){
        super("chrome", "1.0.1")
    }
    openIncognito(){
        console.log("Incognito mode opened")
    }
    
    clearCache(){
        console.log("Cache cleared")
    }
}

class Edge extends Browser{
    constructor(){
        super("Edge", "11.2.3")
    }

    takeSnap(){
        console.log("Snap taken")
    }
    
    clearCookies(){
        console.log("Cookies cleared")
    }
}

class Safari extends Browser{
    constructor(){
        super("Safari", "6.2.3 Beta")
    }

    readerMode(){
        console.log("Reader mode activated")
    }
    
    fullScreenMode(){
        console.log("Full screen mode enabled")
    }
}

const chrome = new Chrome()
chrome.openIncognito()
chrome.clearCache()
chrome.openURL()
chrome.navigateBack()
chrome.closeBrowser()

const edge = new Edge()
edge.clearCookies()
edge.openURL()
edge.takeSnap()
edge.navigateBack()
edge.closeBrowser()

const safari = new Safari()
safari.readerMode()
safari.fullScreenMode()
safari.openURL()
safari.navigateBack()
safari.closeBrowser()