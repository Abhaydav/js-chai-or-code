const name="Abhay"
const repoCount=50

//console.log(name + repoCount + "value")  this should not be used because old fashioned

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//this `` should be used

const gameName =new String("Abhay")

console.log(gameName[0]);

console.log(gameName.length);
console.log(gameName.toUpperCase())

console.log(gameName.charAt(2))

const newString=gameName.substring(0,4);
console.log(newString);

const anotherString=gameName.slice(-4,4)
console.log(anotherString)

//to remove unwanted spaces
const newStringOne="    Hitesh   "
console.log(newStringOne) //its having space 
//to remove spaces we use this
console.log(newStringOne.trim()) //spaces removed