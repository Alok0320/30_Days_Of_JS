// Removing falsy values and returning objecct or array

// Input : obj = [null, 0, false, 1]
// Output : [1]

var compactObject = function(obj) {
    if (obj === null) {
        return obj
    }

    if (typeof obj !== "object") {
        return obj
    }

    if (Array.isArray(obj)) {
        return obj.filter(Boolean).map(compactObject)
    }

    const compacted = {}
    for (const key in obj) {
        let value = compactObject(obj[key])
        if (value) {
            compacted[key] =value
        }
    }
    return compacted
};