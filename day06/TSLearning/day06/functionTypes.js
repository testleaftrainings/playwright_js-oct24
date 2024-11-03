function add(x, y) {
    console.log(x + y);
}
function sub(x, y) {
    return x - y;
}
//optional parameter, default parameter
function employee(firstname, lastname, empStatus, address) {
    if (empStatus === void 0) { empStatus = true; }
    // firstname="Mukta"
    // lastname="Agarwal"
    // address="Chennai"
    return "The employee details --> ".concat(firstname, " ").concat(lastname, " : ").concat(empStatus, " : ").concat(address);
}
console.log(employee("Mukta", "Agarwal", false));
console.log(employee("Ramya", "M", true, "Chennai"));
