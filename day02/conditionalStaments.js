

//to find a positive /negative number

//let num=0

//function functionName(parameter){} -->to reuse the same logic any number of times

//if else -if ladder

function chkNumberstatus(num) {
    if (num > 0) {
        console.log("the given number is +ve")
    } else if (num < 0) {
        console.log("the given number is  -ve")
    }
    else if (num == 0) {
        console.log("the given number is neutral")
    }
    else {
        console.log("the input should be number")
    }

}


// chkNumberstatus("+Venumber")
// chkNumberstatus(12)
// chkNumberstatus(-10)
// chkNumberstatus(0)



//let browserName="chrome"

function browser(browserName) {
    switch (browserName) {
        case "chrome": {
            console.log("launch chromebrowser")
            break//which stops the excution ,end of the statement            
        }
        case 123: {            
                console.log("launch edgebrowser")
                break
        }
        default:            {
                console.log("unsupported browser")
                break
            }
    }
}

browser(123)