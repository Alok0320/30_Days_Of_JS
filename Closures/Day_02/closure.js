function fun(){
    var a = 6;
function f(b) {
    var sum = a + b;
    return sum;
}
a = 5;  //  considered
return f;
}
 // Closure - A function bounded with all the refrences in it's lexical environment
// 
var numsum = fun();
console.log(numsum(2));
