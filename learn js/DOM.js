let myIdElemnt = document
.getElementById//--> faster 
("my-div")
//-------------------------
//-------------------------
let
myTagElemnts =
 document
.getElementsByTagName 
("p")
//--------------------------
console.log
(myIdElemnt)
//--------------------------
console.log
(myTagElemnts[1])
//---------------------------
myTagElemnts[1].innerHTML="Test"
//---------------------------
//---------------------------
//--->>> by class
let myClassElemnts = 
document.
getElementsByClassName("my-span")
//-------------
console.log
(myClassElemnts)
//---------------------------
//---------------------------
//---------------------------
//--------------------------
//----------------------------
//----------------------------
//------------------------


// BY QUERY SELECTOR

let myQueryElement
 = document
 .querySelector("p")
//---------
console.log(myQueryElement)
//---------------------
//----------by query all------

let myQueryAllElemnt
 = document
 .querySelectorAll("p")
//---------
console.log(myQueryAllElemnt)
//-----------------------------
//-----------------------------
//-----------------------------
//-----------------------------
console.log(document.title)
console.log(document.body)
console.log(document.forms[0].one.value)
console.log(document.links[1].href)
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------

//---- Get Set Elements Content And Attributes--
let myElemnt = document.querySelector(".js")
//----Get
console.log(myElemnt.innerHTML)
console.log(myElemnt.textContent)
//--Set
myElemnt.innerHTML= "text from <span>main.js</span> file "
myElemnt.textContent= "text from <span>main.js</span> file "

document.images[0].src = "https://google.com"
document.images[0].alt = "ahmed tamer"
document.images[0].title = "Pic"
document.images[0].id = "Picture"
document.images[0].className = "Pic"

//-------------------------------------------
//------------------------------------------

let myLink = document.querySelector(".link")

myLink.getAttribute("class")
myLink.getAttribute("href")


console.log(myLink.getAttribute("class"))
console.log(myLink.getAttribute("href"))

myLink.setAttribute("href", "https://twitter.com")

//----------------practcing------------------------------
//----------------practcing------------------------------


let getElementByClassName = 
document.
getElementsByClassName
("ilove-front-end") 
console.log(getElementByClassName);
//-----
let ElementsByTagName = 
document.
getElementsByTagName("h1")
console.log(ElementsByTagName[1])
ElementsByTagName[1].innerHTML="HI"
//--------------------------------
let myQuery = 
document.
querySelector("h1")
console.log
(myQuery)
//---------------------
let queryselectoeall = 

document.querySelectorAll("h1")
console.log(queryselectoeall[4])

//----------Get 
let mQ = 
document.
querySelector(".ilove-front-end")
console.log(
    mQ.innerHTML
)
//-set
mQ.innerHTML="<span>helo<span>"

//------------------practcing----------------------------
//----------------practcing------------------------------
//ckeck attributes

console.log(document.getElementsByTagName("p")[0].attributes)

let myP = document.getElementsByTagName("p")[0]

if (myP.hasAttribute("data-src"))
{
// console.log("found")
if(myP.getAttribute("data-src") === "") {
myP.removeAttribute("data-src")
}else {myP.setAttribute("data-src" , "new value")}//  ركز هنا 
}else {
    console.log(`Not found`)
}

// if (myP.hasAttribute()){
//     console.log(`Has attribute`)
// }
// if (document.getElementsByTagName("div")[0].hasAttribute()){
//     console.log(`Has attribute`)
// }else{
//     console.log(`has no attriutes`)
// }
//------------------
//  creat and appeand elements
let Element = document.createElement("div")
let myAttr = document.createAttribute("data-custom")//--للتغير فى المستقبل
let myText = document.createTextNode("product one")
let myComment = document.createComment("THIS IS DIV")
//--------------------------------
Element.className ="product"
 Element.setAttributeNode(myAttr)//--للتغير فى المستقبل
 Element.setAttribute("data-test" , "Testing")
// append text to elements
Element.appendChild(myText)
//---------------------------
 // append comment to elements
Element.appendChild(myComment)
// append element to body
document.body.appendChild(Element)
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//product with title and paragraph

//------------






//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------

//Deal with childern

let ELEMNTS = document.querySelector("div")

console.log(ELEMNTS)
console.log(ELEMNTS.children)
console.log(ELEMNTS.children[0])
console.log(ELEMNTS.childNodes)
console.log(ELEMNTS.childNodes[0])
console.log(ELEMNTS.firstChild)
console.log(ELEMNTS.lastChild)
console.log(ELEMNTS.firstElementChild)

//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------


// Dom event

// Use Events On HTML
// Use Events On JS


// onclick


let myBtn5 = document.getElementById("btn")

myBtn5.onclick = function() {
    console.log(`clocked`)
}


// oncontextmenu  المنيو بتاعت الكليك يمين
let myBtn0 = document.getElementById("btn")

myBtn0.oncontextmenu = function() {
    console.log(`clocked`)
}


// onmouseenter
let myBtn1 = document.getElementById("btn")

myBtn1.onmouseenter = function() {
    console.log(`clocked`)
}


// onmouseleave
let myBtn2 = document.getElementById("btn")

myBtn2.onmouseleave= function() {
    console.log(`clocked`)
}



// onload



// onscroll

window.onscroll = function()
{
console.log("scroll")
}


// onresize
window.resize = function()
{
console.log("scroll")
}


// onfocus



// onblur



// onsubmit























