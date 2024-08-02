const user={
    username:"Abhay",
    price:999,
    welcomMessage:function(){
        console.log(`${this.username},welcome to website`);
    }
}
// user.welcomMessage()
// user.username="sanam"
// user.welcomMessage()
// console.log(this)

// function chai(){
//     let username="Abhay"
//     console.log(this)
// }
// chai()
// function chai(){
//     let username="Abhay"
//     console.log(this.username)//this will not work in functions
// }
// chai()


// const chai =function(){
//     let username="Abhay"
//     console.log(this.username)
// }
// chai()
// const chai = ()=>{
//     let username="Abhay"
//     console.log(this.username)
// }
// chai()

//ARROW FUNCTIONS
//BASIC ARRO FUNCTION DECLARATION
// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(5,2))

//IMPLICIT DECLARATION OF ARROW FUNCTION

// const addTwo=(num1,num2)=> num1+num2
// const addTwo=(num1,num2)=> (num1+num2)
const addTwo=(num1,num2)=> ({username:"Abhay"})

console.log(addTwo(2,3))