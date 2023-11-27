//Arrays
// Simple array decalaration 
const myArry = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, true, "kaif"]
const newArry = new Array(1, 2, 5, 78, 4, 8, 45)
// console.log(myArry[0]);
//The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
//exe = const myArry = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, true, "kaif"]


//Array Method 


const myMhdArry = [1, 2, 3, 4]
//*->Push method basically used to append value from at the end and change the orginal arrays
// myMhdArry.push(5)
// *->pop is basiclly remove the array element in the end
// myMhdArry.pop()
//*-> unshift its bascally its add element in the first index of array
//  myMhdArry.unshift(8)

//*-> shift method is basically its remove first element in arrays


// console.log(myMhdArry.includes(5)) // its travese all the array element and find the exect same elemnt in array return boolean value;
// console.log(myMhdArry.indexOf(5));//Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

// console.log(myMhdArry);

// join
// const addarr = myMhdArry.join()//A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.
// console.log(myMhdArry);
// console.log(addarr);

//slice and splice

console.log("A", myMhdArry);
//slice
// *-> slice is donot considerd the last index in array and cannot change the original array
const myn1 = myMhdArry.slice(1, 3)
console.log(myn1);
console.log("B", myMhdArry);
// splice
// *-> splice is  considerd the last index in array and its  change the original array

const myn2 = myMhdArry.splice(1, 3)
console.log(myn2);
console.log("c", myMhdArry);







