const myObject={
    js:'javascript',
    cpp:'c++',
    rb:"ruby",
    swift:"swift by apple"
}
//for object we use (for in ) loop
for (const key in myObject) {
    console.log(`${key} is shortcut for ${myObject[key]}`); 
}