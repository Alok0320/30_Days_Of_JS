// Memoization  -- Means optimizing the code

function square(n) {
    return n*n
}

function memoize(func) {
    let cache = {}
    return function(...args){
        let n = args[0]
        if(n in cache){
            return cache[n]
        }else{
            let result = func(n)
            cache[n] = result
            return result
        }
    }
}

console.time()
let effResult = memoize(square)
console.log(effResult(5))
console.timeEnd()

// function ki valiue agr already cache mein h
//  to return kra denge dubara calculate krne ki
//  jrurt nhi pdegi 

// console.time()
// console.log(square(5))
// console.timeEnd()