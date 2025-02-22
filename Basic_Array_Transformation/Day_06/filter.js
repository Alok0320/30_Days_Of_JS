// filter method

// array.filter(function(currentValue, index, arr))

const ages = [19, 12, 23, 5]
const result = ages.filter(checkAdult)

function checkAdult(age) {
    return age >= 18
}

console.log(ages)
console.log(result)