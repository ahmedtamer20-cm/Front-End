import './App.css'

function App() {
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
// console.log(`${}`)
// console.log(`${}`)
// console.log(`${}`)
// console.log(`${}`)
// console.log(`${}`)
// console.log(`${}`)
// console.log(`${}`)
// console.log(`${}`)
// console.log(`${}`)
// console.log(`${}`)
// console.log(`${}`)
// console.log(`${}`)
// console.log(`${}`)
// console.log(`${}`)
// console.log(`${}`)
// console.log(`${}`)
// console.log(`${}`)
// console.log(`${}`)
// console.log(`${}`)
// console.log(`${}`)
// console.log(`${}`)
// console.log(`${}`)
// console.log(`${}`)
// console.log(`${}`)
// console.log(`${}`)
// console.log(`${}`)
// console.log(`${}`)
// console.log(`${}`)
// console.log(`${}`)
// console.log(`${}`)
// console.log(`${}`)
  return (
   <></>
  )
}
export default App
