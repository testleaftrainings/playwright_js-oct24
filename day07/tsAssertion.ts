
//response.json()-->
let responseStatus:any="Created"
console.log(responseStatus as string)

let responseCode:any=responseStatus.json()
console.log(<string>responseCode.status())// for compilation purpose