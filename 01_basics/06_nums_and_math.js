const score=100
console.log(score)

// to specify the type we use new and the type of like number string etc
const balance=new Number(100)
console.log(balance)

//to change the type 

console.log(balance.toString());
console.log(balance.toFixed(1));

const otherNumber=123.8966

console.log(otherNumber.toPrecision(4)) //to precise the value

const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN'))

//++++++++++++++++++++++++++++++++++  MATHS +++++++++++++++++++++++++++++
console.log(Math)
console.log(Math.abs(-15))//abs changes negative value to positive only
console.log(Math.round(4.6));//gies nearest value
console.log(Math.ceil(4.6))// highest value
console.log(Math.floor(4.9))//lowest value


console.log(Math.random()) //it will give randome values between 0 and 1

const min=10
const max=20
// for range
console.log(Math.floor(Math.random()*(max -min +1))+min)//this can be used as a formula if you want range