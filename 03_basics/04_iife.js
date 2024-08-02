//IIFE  IMMEDIATELY INVOKED FUNCTION EXPRESSIONS

// we use this for immediate execution of function

(function chai(){
    //Named iife
    console.log(`DB CONNECTED`)
}());

(()=>{
    //unnamed iffi
    console.log(`DB CONNECTED TWO`)
})();

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`)
})("Abhay");
