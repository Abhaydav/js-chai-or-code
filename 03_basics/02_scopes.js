//var c=300 we dont use var because No Block-level Scope
// let a=300
// if (true){
//     let a=10
//     const b=20
//     c=30
//     console.log("INNER",a)
// }

// console.log(c)
// console.log(a)

//just global and local scopes nothing much to learn here

// Nested scopes
//here child can access parents ice creame but parents cant hopefully use understood ;)

// function one(){
//     const username="Abhay"
//     function two(){
//         const website="youtube"
//         console.log(username)
//     }
//     console.log(website)
//     two()
// }
// one()

function one(){
    const username="Abhay"
    function two(){
        const website="youtube"
        console.log(username)
    }
    //console.log(website)
    two()
}
//one()

if(true){
    const username="Abhay"
    if (username==="Abhay"){
        const website=" youtube"
        //console.log(username + website)
    }
    //console.log(website)  //1st error
}

//+++++++++++++++++++++++++++++++INTERESTING+++++++++++++++++++++++++

// function addone(num){
//     return num+1
// }
// console.log(addone(5))
// const addTwo=function (num){
//     return num+2
// }
// console.log(addTwo(5))
//its working fine but

// what is we call function before its declaration heres a twist
console.log(addone(5))//here we can do this 
function addone(num){
    return num+1
}

//console.log(addTwo(5)) //here we cant its called hoisting
const addTwo=function (num){
    return num+2
}


