let myMap = new Map([
    ['name', 'alok'],
    [true,'Boolkey'],
    [1, 'Numberkey'], 
])

myMap.set('age' , 20)
// console.log(myMap)

console.log(myMap.get('name'))
console.log(myMap.has('age'))  // true (available)
console.log(myMap.has('gender'))  // false (not available)

myMap.delete('name')  // will delete name key from map


// set, get, has. delete
