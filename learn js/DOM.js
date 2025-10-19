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
document.images[0].alt = "Alternate"
document.images[0].title = "Picture"
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










//------------------practcing----------------------------
//----------------practcing------------------------------

































//--------------practiceing--------------------------------
//-----------------practiceing-----------------------------














