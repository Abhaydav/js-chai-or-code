//reduce method

const myNums=[1,2,3]

// const myTotal=myNums.reduce((acc,curr)=> (acc+curr),0)
// console.log(myTotal);

// const myTotal=myNums.reduce(function(acc,curr){
//     console.log(`acc: ${acc} curr:${curr}`);
//     return acc+curr
// },0)

// console.log(myTotal);

//here reduce used perfectly
const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"py course",
        price:5999
    },
    {
        itemName:"cpp course",
        price:3999
    },
    {
        itemName:"java course",
        price:9999
    }
]

const cartTotal=shoppingCart.reduce((acc,curr)=> acc+curr.price,0)
console.log(cartTotal);
