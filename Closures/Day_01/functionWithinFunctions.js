function fun(){
    function f(a,b) { 
        const sum = a + b;
        return sum;
    }
    return f;
}

var numsum = fun()
console.log(numsum(2,3));

// function fun(){
//    return function (a,b) { 
//         const sum = a + b;
//         return sum;
//     }
    
// }