// given depth k hisab se array k element ko expand krna h 
// [1, 2, [ 3, 4]] - depth : 1
// [1, 2, [3, [4, 5]], 6]  - depth : 2

// Using recursion 

var flat = function (arr, n) {
    if(n === 0) {
        return arr.slice()
    }

    let flatarr = []


    for (let i = 0 ; i < arr.length ; i++) {
        if (Array.isArray(arr[i])) {
            const nested = flat(arr[i], n - 1)
            flatarr.push(...nested)
        } else {
            flatarr.push(arr[i])
        }
    }
    return flatarr
};