
Array.prototype.last = function() {
    if(this.length == 0){  // this refers to current context and here it is 
                           // refering array, whose last element we are finding
        return -1;
    }
    return this[this.length-1]
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */