class PageAction{
    page:string="LoginPage"
    loadUrl(){
        console.log("Load the base page url")
    }

     clickLogin(){

     }
}


class HomePage extends PageAction{
    page:string="Home"

    constructor(){
        super()
    }

 loadUrl(){
    super.loadUrl()    
    console.log("Load the home page url" )
 }

}

const url=new HomePage()

url.loadUrl()
url.clickLogin()