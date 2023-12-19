///for of loop

// ["","",""]
// [{},{},{}]


const arr = [5, 8, 9, 6, 5, 8, 9];

for(const index of arr) {
    //console.log(index);
}

// every index number iterated in of loop in javascript 

const str = "md kaif raza"
for(const index of str) {
    //console.log(index);
}
// map

const map = new Map();
//Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.
map.set("IN", "India")
map.set("USA", "United State Of America")
map.set("FR", "France")

// console.log(map);
// output 
// Map(3) {
//     'IN' => 'India',
//     'USA' => 'United State Of America',
//     'FR' => 'France'
//   }

for(const value of map) {
    console.log(value);
}
// // output 
// [ 'IN', 'India' ]
// [ 'USA', 'United State Of America' ]
// [ 'FR', 'France' ]




// destructure  of Array
for(const [key, value] of map) {
    console.log(value, key);
}


// OBJECT IN JAVASCRIPT 


const newobj = {
    "game1": "spiderman",
    "game2": "pubg"
}
//newobj(object) is not iterable

// for(const iterator of newobj) {
//     console.log(iterator);
// }