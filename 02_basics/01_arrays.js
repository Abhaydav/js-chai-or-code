// arrays
const myArr=[0,1,2,3,4,5]
const myHeros=["shaktiman","Naagraj"]

const myArr2=new Array(1,2,3,4)
console.log(myArr2[1])

//Array Methods

myArr.push(6)//used to add element in array in last position
console.log(myArr)
myArr.pop()//removes the last value of array
console.log(myArr)

myArr.unshift(9)//used to add element in starting of array
myArr.shift()//used to remove the 1st element of the array

const newArr=myArr.join()//it changes the type of array to string
console.log(myArr);
console.log(newArr);

//slice,splice

console.log("A",myArr)

const myn1=myArr.slice(1,3)//slice does not make any changes in main array and and dont include last range
console.log(myn1)
console.log("B",myArr)
 //splice
const myn2=myArr.splice(1,3)//it makes change in orirginal array & and also includes last range
console.log(myn2)
console.log("c",myArr)