//var c=300 we dont use var because No Block-level Scope
let a=300
if (true){
    let a=10
    const b=20
    c=30
    console.log("INNER",a)
}

console.log(c)
console.log(a)

//just global and local scopes nothing much to learn here