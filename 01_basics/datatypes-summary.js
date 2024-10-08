//Primitive data types

// 7 types : string, Number, Boolean, null, undefined, symbol, BigInt

const score =100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null

let userEmail;

const id =Symbol('123')
const anotherId =Symbol('123')

console.log(id === anotherId);

const bigNumber=3456789101112131415n
//Refrence (Non Primitive)

// Array , Objects, Functions

//Array
const heros =["shaktiman","naagraj","doga"]

let myObj={
    name:"Abhay",
    age:22,
}

const myFunction =function(){
    console.log("Hello world")
}

console.log(typeof myFunction);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// memory allocation

//stack(primitive) And heap(NonPrimitive)

let myYoutubeName="AbhayYadavdotcom"
let anotherName=myYoutubeName

console.log(anotherName)

anotherName="chaiaurcode"

console.log(myYoutubeName)
console.log(anotherName)

//array
let userOne={
    email:"abhay@google.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email="yadav@yahoo.com"
console.log(userOne.email)