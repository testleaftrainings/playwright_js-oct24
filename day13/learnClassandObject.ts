export class Launchbrowser{  //template
  //properties
  //browserType=chromium
  //headless=false 
  //method
  //loadurl () -->enter the url  

 browserName:string="Chromium"
 headless:boolean=false

   loadUrl(){
    console.log(`loading the url in the ${this.browserName} browser in ${this.headless}`)
   return this
}  
    
   enterCredentials(){
    return this
   }

//this-->represt current class property and method
}

//object -reference to the class


const variable=new Launchbrowser()  //default constructor
variable.loadUrl()
variable.enterCredentials()


//method chaining
new Launchbrowser().loadUrl().enterCredentials()


//allocates the memory and initializes the object
