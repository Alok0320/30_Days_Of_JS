/*
Normal Function -
Characteristics:

Has a name for identification and reusability.
Supports hoisting (can be called before its declaration).
Has its own this context based on how it is called.
*/


function f(a,b){
    const sum = a + b;
    return sum;
}
console.log(f(2,4)); 

/*
Anonymous Function - Characteristics:

Does not have its own name.
Cannot be called directly unless assigned to a variable or used as a callback.
Often used in functional programming or event listeners.
*/

let f = function(a,b) {
    const sum = a + b;
    return sum;
}
console.log(f(2,4));

/*
Immediatetly Invoke function Expression (IIFE)  -
Characteristics:

Useful for creating a private scope to avoid polluting the global namespace.
Typically used for initialization logic or wrapping code.
*/

let f = function(a,b) {
    const sum = a + b;
    return sum;
}(2,3)
console.log(f);

/*
Arrow Function -
Characteristics:

Concise syntax, especially for simple expressions.
Does not have its own this, arguments, super, or new.target.
Cannot be used as constructors.
Ideal for callbacks or functional programming.
*/

let f = (a,b) => {
    const sum = a + b;
    return sum;
}
console.log(f(2,9));
