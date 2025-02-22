// Object - Object is a collection of key value pairs

// Object Literals

var obj = {
    name : "Alok",
    age : "19",

    // Function within object

    greet(name){   // no need of function keyword inside object 
        return "good morning " + name
    }
}

console.log(obj.greet("Alok")) // Calling greet function inside obj object


// Object within function

function calc(val){
    const obj = {
        // different key value pairs

        add(val1){
            var a = val + val1
            return a 
        },
        sub(val1){
            var b = val - val1
            return b 
        }
    }
    return obj
}

console.log(calc(5).add(2))
console.log(calc(5).sub(2))

// Multiple function within function 

function calc(val){
    
        function add(val1){
            var a = val + val1
            return a 
        }
        function sub(val1){
            var b = val - val1
            return b 
        }  

        // closure property use ho rhi h , following object k lexical environment mein 2 function h
    return obj = { // object bnana pdega dono function ko sath mein return krne k liye
        add , sub
    }

    // return {
    //     add , sub
    // }
    
}

console.log(calc(5).add(5))
console.log(calc(5).sub(4))

// Syntax for throwing an error in javascript

// throw new Error(" ")
