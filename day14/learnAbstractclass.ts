export abstract class ElementWrapper{
    //partial abstraction -->both implementation as well as has design
    click(){
        console.log(`element.click()`)
       }
    
        hoverAndClick(){
         console.log("element.hover() and element.click()")
        }
  

   abstract dragAndClick():void; //no logic behind ..just definition
}

//cannot create object for class 
//const ew=new ElementWrapper()

export class pwClass extends ElementWrapper{
    dragAndClick(): void {
       console.log(`drag the element to click`)
    }
    
}