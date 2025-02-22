var createCounter = function(init) {
    const n = init
// var obj =
    return {
        increment(){
            return init += 1
        },
        decrement(){
            return init -= 1
        },
        reset(){
            return init = n
        }
    }
    // return obj
};

// 2nd Approach

var createCounter = function(init) {
    const n = init
    
       function increment(){
            return init += 1
        }
       function decrement(){
            return init -= 1
        }
       function reset(){
            return init = n
        }
        return {
            increment, decrement, reset
        }
};