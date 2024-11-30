var Login = /** @class */ (function () {
    //    constructor(){  //default constructor
    //     this.username="vidya"
    //     this.password="@123"
    //    }
    function Login(user, pwd) {
        this.username = user;
        this.password = pwd;
        this.dologin();
    }
    Login.prototype.dologin = function () {
        console.log("The Credentials ".concat(this.username, " and ").concat(this.password));
    };
    return Login;
}());
var loginFunctionality = new Login("Mukta", "234");
//loginFunctionality.dologin()
var loginData = new Login("Santhosh", "456");
//loginFunctionality.dologin()
new Login("Ramya", "789");
new Login("Thenmozhi", "#45");
