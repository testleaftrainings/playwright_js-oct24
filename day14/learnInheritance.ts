import { T } from "@faker-js/faker/dist/airline-BLb3y-7w"

class Amazon{

   loadUrl(){
    console.log("The amazon url is loaded")
   }

   login(){
    console.log("Login with user credential")
   }

   searchProduct(){
    console.log("Search for pdt")
   }

}

class userReq extends Amazon{

    selectPdt(){
        console.log("Selected the pdt")
    }

    addToCart(){
        console.log("Added to cart")
    }
}



const onpurchase1=new userReq()
onpurchase1.loadUrl()
onpurchase1.searchProduct()
onpurchase1.selectPdt()

const onpurchase2=new userReq()
onpurchase2.loadUrl()
onpurchase2.login()
onpurchase2.searchProduct()
onpurchase2.selectPdt()
onpurchase2.addToCart()


class Transaction extends userReq{

    payment(){
        console.log("Payment done")
    }

}

const user=new Transaction()
user.login()
user.payment()