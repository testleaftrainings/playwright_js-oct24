//string literal
let username="Poorani"

let firstname="Poorani"

//string object
let fname=new String("Poorani")

//literal values are compared
console.log(username==firstname)

//with strict equality
console.log(username===firstname)

//comparing literal and object type

console.log(username==fname)  // compare only the value

//strict equality
console.log(username===fname)// compare the reference location/ value


let browserName="Hello"
//emorhc
//pallindrome -->orginal == reversed word
//for(s and end ,conditon){print the reversed data}

let length=browserName.length; //property  //count of character
console.log("no of character in String: " +length)

console.log(browserName.charAt(3))

let count=0;
for(let i=0;i<length;i++){
    if(browserName.charAt(i)=='r')
        count++;  //count=count+1
}
console.log("the occurence of character r in "+ browserName + "is " +count)

//console.log(browserName.indexOf('r')) // first matching index
//console.log(browserName.lastIndexOf('r')) //last matching index

//console.log(browserName.substring(2,length-2))// end range  ->character is ignored .. it return the character  2,3,

console.log(browserName.slice(1,-2))//return the substring for the given range
console.log(browserName.slice(-9)) // neg index treats to read the data from the back considering the end as 0 index
//ch rome br  ows   er
//e brows //8 to 2 (reading from back)

console.log(browserName.includes("om")) //search for the substring returns the boolean  -contains
console.log(browserName.replaceAll("l","$"))

console.log(browserName.replace('l','#')) //first occurence

let price ="Rs.1234"
console.log(price.replace(/[^0-9]/g,""))  //^ -except 0-9 , rmove all the characters from the string
console.log(price.replace(/[a-zA-Z0-9]/g,"")) //returns the characters other than alphanumeric

///w/g-->white space
//d/g-->digit
///#/g