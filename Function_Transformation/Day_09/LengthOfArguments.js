var argumentsLength = function(...args) {
    // return args.length   // Short-cut Method
    let count = 0
    for( let i = 0 ; i < args.length ; i++){
     count += 1
    }
    return count
 };