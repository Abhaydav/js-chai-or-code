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


const chai =function(){
    let username="Abhay"
    console.log(this.username)
}
chai()