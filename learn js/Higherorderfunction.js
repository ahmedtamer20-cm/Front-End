
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


























































































































