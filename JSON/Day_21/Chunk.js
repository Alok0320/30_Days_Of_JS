// Loadash's _.chunk

// Lodash - Lodash is a utility library for javascript,
//          providing functions to work with arrays, objects, strings, etc.

// syntax 

// _.chunk(array, size)

// Example

const _ = require("lodash")
let arr = [1, 2, 3, 4, 5, 6]

// Making chunks of size 1

console.log(_.chunk(arr, 1)) 

 // without using chunk function

 var chunk = function(arr, size) {
    let result = []

    for(let i = 0 ; i < arr.length ; i+= size) {
        result.push(arr.slice(i, i+ size))    // do it without using slice
        
    }

    return result
};