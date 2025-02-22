// Async/Await = Async = makes a function return a promise
//               Await = makes an async function wait for a promise

function loadFile(){
    
return new Promise((resolve, reject) => {
    // let fileLoader = true  // resolve
    let fileLoader = false   // reject
    if(fileLoader){
        resolve("File Loaded")
    } else {
        reject("File Not Loaded")
    }
})
}

// resolve 

// async function myFunction() {
//     const value = await loadFile()
//     console.log(value)
// }

// myFunction()


// reject

async function myFunction() {
    try{
        const value = await loadFile()
        console.log(value)
    } catch(error){
        console.log(error)
    }
    
}

myFunction()