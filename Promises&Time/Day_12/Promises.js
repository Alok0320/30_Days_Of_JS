// Synchronous = Executes line by line consecutively in a sequential manner.
//               Code that waits for an operation to complete.


console.log("Task-1")
console.log("Task-2")
console.log("Task-3")


// Asynchronous = Allows multiple operations to be performed concurrently
//                without waiting.
//                Doesn't block execution flow and allows the program to 
//                continue.
//                (I/O operations, network requests, fetching data)
//                Handled with Callbacks, Promises, Async/Await

setTimeout(function(){  //Asynchronous code
    console.log("Task-1"), 3000
})
console.log("Task-2")
console.log("Task-3")

// Above code will print Task 2 first then Task 3 and at last Task 1
// But we want to print 1,2,3 in this manner, show we use callbacks, async/await and promises



// Promises - Pending, Resolve OR Reject

/*
const myPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async Task")
        resolve()
    },2000)  // 2000 milisecond = 2 second
})

myPromise.then(function(){
    console.log("Promise resolved")
})

*/

const myPromise = new Promise(function(resolve, reject){
    // let fileLoader = true
    let fileLoader = false
    if(fileLoader){
        resolve("File Loaded")
    }else{
        reject("File Not Loaded")
    }
})

// consume

myPromise.then(function(value){
    // new Promise
    console.log(value)
}).catch(error => console.log(error))  // handling reject

// myPromise.then(value => console.log(value))
//          .catch(error => console.log(error))