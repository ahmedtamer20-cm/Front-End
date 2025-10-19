 /* Data types:
  1- string
  2-number
  3- Array-->objects --> no. 3 and 4
  5- boolean
  6-undefined
  */
console.log(typeof("ahmed tamer"))
console.log(typeof(20))
console.log(typeof(["omar" , "yamer" , "ahmed"]))
console.log(typeof(50000))
console.log(typeof(true))
console.log(typeof(undefined))

////////////////////////////////////////////////////////////
 let a = "we love"
 let b = "java script"
 let c = "and"
 let d = "html"
 console.log(`  ${a}  & ${b} 
     & ${c} 
    & ${d} `)
//---------------------------------------------
 let num = 5;
 console.log(`${++num}`);

 console.log(`${10 + 20}`);
 console.log(`${10 + "ahmed"}`);
 console.log(`${10**2}`);
console.log(`${20 / 5}`);
 console.log(`${20 % 5}`);  //مفيش باقى قسمة 
console.log(`${20 * 50}`);
console.log(`${20 - 50}`);
//--------------------------------------------
console.log(`${-1_000_000_000}`);
console.log(`${ +"100"}`);
 console.log(`${- "-100"}`);
 console.log(`${+"+ahmed"}`);
  console.log(`${-true}`);
  console.log(`${- null}`);
//--------------------------------------------

 console.log(`${Number.MAX_VALUE }`);
 console.log(`${Number.MAX_VALUE }`);

console.log(`${(1000).toString()}`);
 console.log(`${(100.5).toString()}`);
 console.log(`${(100).toString()}`);

 console.log(`${100.554555.toFixed(2)}`)

console.log(`${Number("100 ahmed")}`); 
console.log(`${+ "100 ahmed"}`);
 console.log(`${parseFloat("100.500 ahmed")}`);
 console.log(`${parseInt("ahmed 100 ahmed")}`);
 console.log(`${parseInt(" ahmed 100 ")}`);
  console.log(`${Number.isInteger(100.500)}`)
console.log(`${Number.isNaN("OSAMA")}`)
//---------------------------------------------

/*             -----------  Math object------------*/

 console.log(`${Math.round(99.1)}`);  //--->لو الرقم بتاعك  تحت النص بيقربه للرقم ال قبله والعكس فوق النص
 console.log(`${Math.ceil(99.7)}`)
console.log(`${Math.floor(99.7)}`)
console.log(`${Math.max(110 , 20 , 30)}`)
 console.log(`${Math.min(110 , 20 , 30)}`)
console.log(`${Math.random(10 , 20 , 30)}`)
console.log(`${Math.pow(2 , 4)}`)
 console.log(`${Math.trunc(99.500)}`)//-------> بيشيل الكسور

//-------------string methods---------------
let theName = "Ahmed Tamer El-gamel ";
let theList = [1 , 2 ,3]
//Index
console.log(`${theName}`);
 console.log(`${theList[2]}`)
//chartAt()

 console.log(`${theName.charAt(1)}`)
 console.log(`${theName.charAt(5)}`)
 console.log(`${theName.length}`)
console.log(`${theName.trim()}`)
console.log(`${theName.toLowerCase()}`)
 console.log(`${theName.toUpperCase()}`)



//----------------string methods---------------
let g = "ahmed|web|school "
console.log(`${g.indexOf('o')}`)
console.log(`${g.lastIndexOf( "o")}`)
console.log(`${g.slice(3 , 6)}`)
console.log(`${g.repeat('2')}`)

// console.log(a.split("separator , limit"));
// console.log(a.split(""));----> cut all 
console.log(`${g.split("|" , 2)}`)
// مش بيفرق معاه التايب
console.log(`${10 == "10"}`)
console.log(`${10 != "10"}`)

console.log(`${10 !== 10}`)

let price = 1000;
let discountAmount = 500;
let discount = false;
let country = "JAPAN"
if (discount === true) {
  price -= discountAmount;
}
else if (country === "Egypt") {
price -= 40;
}
else {price -= 50;}
 console.log(`${price}`)


//  logical or | |    for 
// Null + undefined + Any False value

// Nullish  Coalescing orerator ??
// Null + undefined
 let price2= "";
console.log(`the price is ${price2 || 200}`); 
 console.log(`${price2 ?? 200}`)


//-------------------------------switch statments--------------------------------
//-------------------------------switch statments--------------------------------
 let day = 5;

switch (day) {
  case 0 :
  console.log(`${"saturday"}`);
  
case 1: 
console.log(`${"sunday"}`)

case 2: 
console.log(`${"monday"}`)

case 2: 
console.log(`${"monday"}`)

case 2: 
console.log(`${"monday"}`)
case 2: 
console.log(`${"monday"}`)
case 2: 
console.log(`${"monday"}`)
default : 
console.log(`${"unknown day"}`)
}

//-----------------------------------------ARRAYS-------------------------------------------------
// ------------------------------------------------------------------------------------------------
let myFreind = ["Ahmed"  , "Mohamed" , "Sayed" ];
console.log(`  Hello  ${myFreind [0] [0]}`)

let myFreinds = ["Ahmed"  , "Mohamed" , "Sayed" , ["marwan" , "yasser"]]
console.log(`  Hello ${   myFreinds [3] [1]}`)


//to add elemnts in array

myFreind[1] = "EBRAHIM";
 console.log(`  "Hello"  ==>   ${myFreind}`)

let myahmed = ["Ahmed"  , "Mohamed" , "Sayed" ];
console.log(`${myahmed.length}`)

myahmed[2] = "HEMA" 
 console.log(`  "Hello"  ==>   ${myahmed}`)


 myahmed.length = 2;
 console.log(`  "Hello"  ==>   ${myahmed}`)



let Freinds = ["Ahmed"  , "Mohamed" , "Sayed"]      //    Add elemnts to the End            (((((((ADD)))))))
Freinds.push("omar" , "ahmed")
console.log(`${Freinds}`)
//---------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------
let Freind = ["Ahmed"  , "Mohamed" , "Sayed"]  // Add elemnts to the first             (((((((ADD)))))))
Freind.unshift("omar");
console.log(`${Freind}`);

let Frein = ["Ahmed"  , "Mohamed" , "Sayed"] 
Frein.shift();  //   (((((((((REMOVE)))))))))
console.log(`${Frein}`);
//-------------------------------------*----------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------
let Frei = ["Ahmed"  , "Mohamed" , "Sayed"]  
Frei.pop();   //   (((((((((REMOVE)))))))))
console.log(`${Frei}`);


// (((((((((((search)))))))))))


let ahmed = ["ahmed" , "tamer"  ,"eb" ] ;

console.log(`${ahmed.indexOf("ahmed")}`)
console.log(`${ahmed.lastIndexOf("tamer")}`)
console.log(`${ahmed.includes("ahmed")}`)

















































































