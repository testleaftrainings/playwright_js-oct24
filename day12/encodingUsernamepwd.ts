

let username="admin"
let password="UY2mOUe^7p@f"
const credentials = `${username}:${password}`;
// Encode in Base64
const encodedCredentials = btoa(credentials);
console.log(encodedCredentials)