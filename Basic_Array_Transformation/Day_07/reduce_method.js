// Reduce method

// array.reduce(function(total, currentValue, currentIndex, arr))

let arr = [1, 2, 3, 4, 5]
let sum = arr.reduce(addNum)

function addNum(a,b) {
    return a+b
}

console.log(arr)
console.log(sum)