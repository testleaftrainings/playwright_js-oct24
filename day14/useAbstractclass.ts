import { ElementWrapper } from "./learnAbstractclass";
import { DatabaseConnection } from "./learninterface";

class PWUitility extends ElementWrapper implements DatabaseConnection{
    openConnection(): void {
        throw new Error("Method not implemented.");
    }
    setBrowserType(): void {
    }
    dragAndClick(): void {
    }
    
}


new PWUitility().click()
new PWUitility().hoverAndClick()
new PWUitility().dragAndClick()