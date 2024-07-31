const marvelHeros=["thor","ironman","spiderman"]
const dcHeros=["superman","flash","batman"]
marvelHeros.push(dcHeros)
//console.log(marvelHeros)

const allHeros=marvelHeros.concat(dcHeros)
//console.log(allHeros) 

const all_new_heros=[...marvelHeros, ...dcHeros]
//console.log(all_new_heros)

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)
//console.log(real_another_array)

console.log(Array.isArray("Hitesh"))//false  to check its array or not 
console.log(Array.from("Hitesh"))


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3)) //to make an array of multiple elements

