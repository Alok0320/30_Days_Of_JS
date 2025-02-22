function add(a,b) {
    return a + b
}

function mulTwo(val) {
    return val * 2
}

function square(val) {
    return val * val
}

// function  addSquare(a,b) {
//     return square(add(a,b))
// }


// const result = add(2,3)
// console.log(square(result))

// console.log(addSquare(3,4))


// function compose(f1 , f2) {
//     return function(a,b) {
//         return f2(f1(a,b))
//     }
// }

// const result = compose(add , mulTwo) // referencing previously built two functionm in place of f1 and f2
// console.log(result(2,3))


// Using Arrow function

// for two functions

// const composeTwo = (f1,f2) => (a,b) => f2(f1(a,b))

// const result = composeTwo(add , mulTwo) // referencing previously built two functionm in place of f1 and f2
// console.log(result(4,5))

// for three functions

// const composeTwo = (f1,f2,f3) => (a,b) => f3(f2(f1(a,b))) // firstly f1 will be executed after it f2 after it f3

// const result = composeTwo(add , mulTwo, square) // referencing previously built two functionm in place of f1 , f2 and f3
// console.log(result(4,5))

// Composition of unlimited function

function composeAll(...funs){
    return function(...values){
        return funs.reduce((val , fn) => fn(val) , values )
    }
}

// Using arrow function

const composeAll = (...funs) => (...values) => funs.reduce((val , fn) => fn(val) , values)