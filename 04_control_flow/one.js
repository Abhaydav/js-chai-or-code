//if

const isUserLoggedIn=true
if (isUserLoggedIn){
    console.log("its true")
}


const temprature=52
if(temprature<50){
    console.log("less than 50")
}
else {
    console.log("temprature is greater than 50")
}

const balance=1000
if (balance>500) console.log("test"),
    console.log("test2");

// const isUserLoggedIn=true
// const debitCard=true

// if(isUserLoggedIn && debitCard){
//     console.log("Allow to buy course")
// }
// const isUserLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true
// this || is used to present or operatin in javascript if any of conditions are true please execute it
if (loggedInFromGoogle || loggedInFromEmail){
    console.log("userLoggedIn")
}