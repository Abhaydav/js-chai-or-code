// function sayMyName(){
//     console.log("A")
//     console.log("b")
//     console.log("h")
//     console.log("a")
//     console.log("y")
// }
// sayMyName()


// function addTwoNumber(number1,number2){
//     console.log(number1+number2)
// }


// function addTwoNumber(number1,number2){
//     // const result=number1 + number2
//     // return result
//     return number1+number2
// }
// const result=addTwoNumber(2,5)
// console.log("result",result)

// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// loginUserMessage("Abhay")
// console.log(loginUserMessage("Abhay"))
// console.log(loginUserMessage())//undefined

function loginUserMessage(username){
    if(username===undefined){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage())

// function calculateCartPrice(...num1){  // ... are rest operators
//     return num1
// }
// console.log(calculateCartPrice(200,400,500))

const user={
    username:"Abhay",
    price:199
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is${anyObject.price}`)

}
//handleObject(user)
handleObject({
    username:"Sanam",
    price:"399"
})

const myNewArray=[100,200,300,400]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))