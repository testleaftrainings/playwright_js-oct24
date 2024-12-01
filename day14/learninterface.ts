import { ElementWrapper } from "./learnAbstractclass";

interface PageAction{

    navigateandClick():void;

    windowWithIndex():void;

    

}

//not allowed to create object for the class /interface

interface BrowserClass{

    setBrowserType():void;
}


interface DatabaseConnection extends BrowserClass{

    openConnection():void;

}

class wrapperClass extends ElementWrapper implements PageAction,DatabaseConnection{
    setBrowserType(): void {
       
    }
    openConnection(): void {
       
    }
  
    dragAndClick(): void {
       
    }
    navigateandClick(): void {
      
    }
    windowWithIndex(): void {
     
    }
    
}


export {PageAction,BrowserClass,DatabaseConnection,wrapperClass}