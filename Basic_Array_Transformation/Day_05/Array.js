 // Constructor Array

 var arr = new Array(2,3,4,5) // Elements
 console.log(arr)

 var arr1 = new Array(3) // size of array 
 arr1[0] = 5
 arr1[1] = 6
 arr1[2] = 7
 arr1[3] = 8
 console.log(arr1)

//  Array literal

let arr2 = [2, 3, 4]
console.log(arr2)

// array accepts multiple data types in Javascript

let arr3 = [2, 3, "Alok", 'c']
console.log(arr3)

// objects in array

let arr4 = [{
    fname: 'Alok',
    age: 22
}, {
    fname: 'Chhaya',
    age: 21
}
]
console.log(arr4)


// Traversing an array

var num = [1, 2, 3, 4, 5]
for(let i = 0 ; i < num.length ; i++) {
    console.log(num[i])
}

// few Methods

var num1 = [1, 2, 3, 4, 5]
var a = num1.map(fun)

function fun(n) {
    return n + 1
}

console.log(a)
console.log(num1) // Original aray will be remain same 


// Using array function

/*
var a = num1.map((n)=> {
    return n+1
})
console.log(a)
/*

// Map Method

// array.map(function(currentValue, index, arr))
