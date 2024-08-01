//singletons
//Object.create

//object literals

//symbol
const mySym=Symbol("key1")
const jsUser={
    name:"hitesh",
    [mySym]:"myKey1",
    age:18,
    location:"jaipur",
    "email":"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]

}
console.log(jsUser.name)
console.log(jsUser["email"])//this can also be used

console.log(jsUser[mySym])//this is used to call symbol value

jsUser.email="hitesh@chatgpt.com"//to modify in object
console.log(jsUser.email)
//to stop modification in object e use freeze
//Object.freeze(jsUser)
jsUser.email="hitesh@microsoft.com"
//console.log(jsUser.email)

jsUser.greeting=function(){
    console.log("Hello js user");

}
console.log(jsUser.greeting())
console.log(jsUser)


