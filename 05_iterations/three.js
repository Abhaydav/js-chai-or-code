// for of

// const arr=[1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
    
// }

// const greetings="Hello world"
// for (const greet of greetings) {
//     console.log(`each char is ${greet}`)
// }

//Maps

const map = new Map()
map.set('IN','India')
map.set('USA','United States Of America')
map.set('Fr','France')

//console.log(map);

// for (const key of map) {
//     console.log(key);
    
// }
//output
//[ 'IN', 'India' ]
//[ 'USA', 'United States Of America' ]
//[ 'Fr', 'France' ]

for (const [key,value] of map) {
    console.log(key,':-',value);
}
//output
// IN :- India
// USA :- United States Of America
// Fr :- France

