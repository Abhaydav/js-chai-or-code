//here we will use map

const myNumbers=[1,2,3,4,5,6,7,8,9,10]

// const newNumbers=myNumbers.map ((num)=> num+=10)
// console.log(newNumbers);

// const newNumbers=myNumbers.map((num)=> num*10)
// console.log(newNumbers);


const newNumbers=myNumbers.map((num)=> num*10).map((num)=>num+1).filter((num)=> num>=40)
console.log(newNumbers);

//this is how we can apply more than one methods 