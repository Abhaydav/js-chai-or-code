let score="33abc"

console.log(typeof score)//string

let valueInNumber=Number(score)//changing type string to number 
console.log(typeof valueInNumber) //output => number

console.log(valueInNumber)//NaN means not a number

// "33" => 33
//"33abc" => NaN
//true =>1 ,false =>0
let someNumber=33
let stringNumber=String(someNumber)
console.log(typeof stringNumber)//string
//************************************operations********************

let str1="hello"
let str2=" Abhay"
let str3=str1 + str2
console.log(str3) // hello Abhay


console.log("1"+2)//12
console.log(1+"2")//12
console.log("1"+2+2)//122
console.log(1+2+"2")//32