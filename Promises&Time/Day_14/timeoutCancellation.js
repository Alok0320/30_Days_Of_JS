// timeout set krne pe function kuch time
//  baad execute hota h ,, and timeout 
// cancel krne pe delay cancel ho jata h 

// setTimeout() = function in javascript that allows you
//                to schedule the execution of a function after an
//                amount of time (milliseconds)  -- [Stop watch for funtions]

//                setTimeout(callback, delay)

/*
function greet() {
    console.log("Hello Everyone")
}

setTimeout(greet, 3000)
*/

//OR


// setTimeout(function() {
//     console.log("Hello Everyone")
// }, 3000)


// clearTimeout() = can cancel a timeout before it triggers

const timeoutID = setTimeout(function() {
    console.log("Hello Everyone")
    }, 3000)

clearTimeout(timeoutID)