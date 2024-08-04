// const userEmail="a@google.com"

// if (userEmail){
//     console.log("Got user email")
// }
// else{
//     console.log("Dont have user email")
// }
//output Got user email
const userEmail=""

if (userEmail){
    console.log("Got user email")
}
else{
    console.log("Dont have user email")
}
//output dont have ser email

//falsy value =,0,-0,BigInt 0n,"",null,undefined,NaN
//truth value= [],{},function(){}

//thats how we can check objects empty or not
const emptyObj={}
if (Object.keys(emptyObj).length===0){
    console.log("The object is empty")
}


//Nullish Coalescing Operator( ?? ) : null undefined

let val1;
// val1=5??10
// val1=null??10
// val1=undefined??15
// val1=null ?? 10 ?? 15
//console.log(val1)


//Terniary Operator
//it is used as a small of if else single line code
// condition ? true : false

const iceTeaPrice=100
iceTeaPrice <=80 ? console.log("yes its greator than hundred") : console.log("no its not")