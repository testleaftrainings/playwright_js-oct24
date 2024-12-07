class ElementAction{

     public click(eleLocator:string):void ;

     public click(eleLocator:string,forceClick:boolean):void ;

      click(eleLocator:string,forceClick?:boolean,timeout?:number){
        if(forceClick){
            console.log(`Click the ${eleLocator} forcefully`)
        }else{
            console.log(`Click on the ${eleLocator}`)
        }
     }


     
       async getText(locator:string="90898",timeout?:number):Promise<string>{                  
        return  "text"
     
    }
      getTitle(locator:string="Page title",timeout?:number):string{            
        return locator
     }
}

const webEle=new ElementAction()
webEle.click("Login",true)
webEle.click("submit",)

console.log(webEle.getTitle())
console.log(webEle.getTitle("LeafTaps_Login"))
console.log(webEle.getTitle("LeafTaps_Login",3000))


console.log(webEle.getText())  //using default value for the parameter
console.log(webEle.getText("CRMSFA",3000)) // passing different value to the parameter