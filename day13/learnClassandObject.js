var Launchbrowser = /** @class */ (function () {
    function Launchbrowser() {
        //properties
        //browserType=chromium
        //headless=false 
        //method
        //loadurl () -->enter the url  
        this.browserName = "Chromium";
        this.headless = false;
        //this-->represt current class property and method
    }
    Launchbrowser.prototype.loadUrl = function () {
        console.log("loading the url in the ".concat(this.browserName, " browser in ").concat(this.headless));
    };
    return Launchbrowser;
}());
//object -reference to the class
var browser = new Launchbrowser(); //allocates the memory and initializes the object
browser.loadUrl();
