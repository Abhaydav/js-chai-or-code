const coding=["js","ruby","python","cpp"]

// coding.forEach(element => {
//     console.log(element);
    
// });

// coding.forEach(function (val){
//     console.log(val);
    
// })

// coding.forEach((val)=>{
//     console.log(val);
    
// })



// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

//this is how we can access objects inside array
const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
    {
        languageName:"java",
        languageFileName:"java"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageName,item.languageFileName);
    
})
myCoding.forEach((item)=>{
    console.log(item.languageName);
    
})