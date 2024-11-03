Agenda:
------
9.00AM  to 10.00AM  -CSS / XPath 
10.00AM to 10.30AM  -Assertion/Autowait
10.30AM to 10.45AM - Classroom
10.45AM to 11.00AM - Break
11.00AM to 11.15AM - Typescript Introduction
11.15AM to 12.00PM - Type inference & Annotations(Explicit inference)
12.00PM to 12.40PM - Type Aliases,Object Literals,Enum
12.40PM to 1.00PM -  Classroom


To understand the relationship

<form>
  <p>
    <label>
    <input>
  </p>
  <p>
    <label>
    <input>
  </p>
  <p>
    <input>
  </p>
</form>
using css
----------
1. ancestor to descendant(grandparent to grand child , parent to child)
ancestor descendant
form input
div p

await page.locator("form input").first().fill(" ")

2. child combinator
parent>child
p>label


3. Sibiling combinator
elder + younger
label + input  -->immediate connection
label ~ input  -->generic

await page.locator("form label+input").first().fill(" ")

label[text='Username']+ input

4.partial matches -->when there is a long value/get list of values for validation

3ways 
a. using prefix -->attribute value starts with specific data
  [attribute^='prefixvalue']  ^ -->match with the prefix value
div[class^='inventory']
input[id^='pass']

b. using suffix-->attribute  ends with specific value
[attribut$='suffix value']
div[class$='item'] a div  -->retreive the vsibile text of the product
await page.locator("div[class$='item'] a div ").allinnerText()

await page.locator("div[class$='item'] a div ").nth(4).innerText() 
 innerText() -->reterive the value from the dom (black text) used for assertion

c.using any part
[attribute*='any value of the attribute']
[text*='']

xpath:index starts with 1
-----
Absolute xpath:  //not recommeded  long path to locate an element
   start with /html
/html/body/div[2]/form/p[1]/input

relative xapth: 
  starts from the current node 
  //
  //tagname[@attribute='attibuteValue']
  //input[@id='username']

parent to child:
--------------
//tagname[@attribute='value']/childtag

//form[@id=login]/p

(//form[@id='login']/p)

using index
(realtive xpath)[index]

child to parent(bottom to approach)
-----------
//tagname[@attribute='value']/parent::tagname of the parent(relative xpath)

//input[@id='username']/parent::p[@class='top']

text based xpath
//tagname[text()='textvalue'] -->text black text
//a[text()='CRM/SFA']
//label[text()='Username']

partial matches in xpath

attributed based
//tagname[contains(@attribute,'attValue')]
//div[contains(@class,'item')]

text based
//tagname[contains(text(),'textValue')]
//span[contains(text(),'Reg')]

sibiling based xpath
(realtivexpath)/following-sibiling::tagname
//label[text()='Username']/following-sibling::input (top to bottom)
//input[@id='password']/preceding-sibling::label (bottom to top)

cousin based xpath
(realtivexpath)/following::tagname
//label[text()='Username']/following::input
(//input[@id='password']/preceding::label)[2]



---------------------

Assertions
----------
Auto Retrying  -->default timeout --5s -->5000ms-->overirden -->10s
non retrying

Typescript:
----------
  -->static typing
  -->superset of javascript 
  ts -->transpiled (compilation)-->js -->run
   -->interface, enum 
   -->compile time chk

To use typescript file

//All projects in the workspece uses the onse single version of TS
 npm install -g typescript

 local insatll
 //specific to project
 npm install --save-dev typescript
to chk the version 

tsc -version

to initialize the config file
tsc --init

typescript compile -tsc
  let username="Vidya"
  username=123




javascript
 ------
  -->dynamic typing
  -->protype based

execute 
tsc filename.ts -->compile the code
node  filename.js -->run the code

string
number
boolean
any
null
undefined

to create custom datatype -->type alias











filtermechnism /has ,hastext autowait







/**
 * Define the type supportedBrowser = Chrome|Edge
 * Define the browserVersion = 127|128
 * Define the type browserProfile = supportedBrowser & browserVersion (object literals)
 * Define the function and pass the argument (browser)
 * Launch the Chrome browser
 * Call the function
 */


load the salesforce url
credentials located with xpath
verify the title with expect library using tohavetitle