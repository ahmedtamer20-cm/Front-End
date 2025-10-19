
//========================بداية ال Higher order function ==============================
//---------first : Map-------------

// this way not by map..............

let myNums = [1 , 2 , 3 , 4  ,  5 , 6];
let newArray = [];
for (let i = 0 ; i < myNums.length; i++  )  {
newArray.push(myNums[i] + myNums[i] );
}
console.log(`${newArray}`);

// -------------------this way by map---------------------
// let addSelf = myNums.map(function(element , index , array) {
// console.log(`    current element  => ${element}`)
// console.log(`   array  => ${index}`)
// console.log(`    this  => ${this}`)


// return element + element ;

// } , 10)
// console.log(`${addSelf}`);

// let addSelf = myNums.map((element ) => element + element) ;
// console.log(`${addSelf}`);


function addition (ele) {
    return ele + ele
}

let add = myNums.map(addition) // ===> named function

console.log(add)


//=========================Map practice==================

let swappingCases = "elZERo"
let invertedNumber = [1, -10 , 15 , 100 , -30]
let ignoreBooleans = "Elz123er4o"

let sw =  swappingCases.split ("") . map(function ()        {
 
} )
//============Filters=============================
//=======Filters=======================================
//================================
//بيرجع array جديدة فى العناصر ال عدت من التست
//Get friend with name starts with A only 
let friends = ["Ahmed" , "sameh"  , "syaed" , "tamer" , "ebrahim" , "amir" , "" ]

//Get even numbers only
let numbers  = [11 , 20 , 5 , 7 ,17 , 10]

//-------Map vs Filter ----------

let addMap = numbers.map(function (el) {
return el + el 
})
console.log(addMap)

//------------

// هنا فلى الفلتر لما بيلاقى اول عملية انت اديتهاله true  بيرجع ال انت اديتهوله زى ماهو تانى 


let addFilter = numbers.filter(function (el) {//----> الكلام دا غلط 
return el + el //----> الكلام دا غلط 
})//----> الكلام دا غلط 
console.log(addFilter)//----> الكلام دا غلط 

// let filteredFreinds = friends.filter(function()
// {
//     return el.startsWith("A");
// })
// console.log(filteredFreinds)
//----------------------------
let evenNumber = numbers.filter(function(el) {
    return el % 2 === 0;//---> يقبل القسمة على 2
})
//-------------------------------------------------Filter practice-----------------------------------------------
//------------------------------------------Filter practice----------------------------------------------------
//filter words mora than 4 charcters 
let sentece = "I love foood cood too playing much "

let smallWords =  sentece
.split(" |  ")
.filter(function(ele) {
    return  4 >= ele.length ;
}).join("  ")

console.log(smallWords);
//------------------------------------

//Ignore numbers
let ignoreNumbers = "Elze1234r8o"

let ign = ignoreNumbers
.split ("")
.map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : " " ;

}) 
.join("");

console.log(ign);
//------------------------------
let mix = " A13BS2ZX"
let mixContent = mix
.split("")
.filter(function(ele) {
return !isNaN(parseInt(ele)) ;
}) .map(function(ele){
    return ele *ele
})

.join("")
console.log(mixContent)
//-------------------------------------Reduce----------------------------------------
//---------------------------------------Reduce--------------------------------------
//--------------------------------------Reduce---------------------------------------

let nums = [10 , 15 , 20 , 30]

let add5 =nums.reduce(function(acc , current , index , arr){
                                                    //     10   |   15 ---> no initial
                                                       //     5    |   10

return acc + current 
}, 5)//---> initial value القيمة ال انت هتبدا بيها 
console.log(add5)

//-------------------------------------Reduce  practice ----------------------------------------
//---------------------------------------Reduce  practice --------------------------------------
//--------------------------------------Reduce    practice  ---------------------------------------

 let theBiggest = ["Other" , "Bla " , "AAA" , "Test"]

 let check2 =theBiggest.reduce(function(acc , current , index , arr){
                                                     //     10   |   15 ---> no initial
                                                        //     5    |   10
 
 return acc.length > current.length ? acc : current ;
 })//---> initial value القيمة ال انت هتبدا بيها 
 console.log(check2)



let removeChars = ["E"  , "@" , "@" , "@" , "l" , "z" , "r" , "@" , "o" ]

let finalString =  removeChars.filter(function(ele) {
return ! ele.startsWith("@")
}).reduce(function(acc , current ) {
    return `${acc}${current}`
});
console.log(finalString);

//-----------------------------------FOREACH ----------------------------------------
//-------------------------------------FOREACH --------------------------------------
//--------------------------------------FOREACH  ---------------------------------------
//  مش بترجع حاجة 
let alllLis = document.querySelectorAll("ul li ")

let allDivs = document.querySelectorAll(" .content div")



ele.forEach(function(ele) {
ele.onclick = function () {
alllLis.forEach(function(ele) {
    //remove active class from ele
ele.classList.remove("active")
})
//this active is ele
this.classList.add("active")

    // console.log(this) //--->  عايدة على العنصر

    //Hide all divs 
    allDivs.forEach(function(ele) {
ele.style.display = "none"
    })
}
})
console.log(alllLis)



















































































