const electronic = ["board", "switch", "fan", "ac"];
const computer = ["keyboard", "laptop", "mouse", "charger"];
//*->in Arrray push method doesnot change the old array its simplly add treated as a element and add last index
// electronic.push(computer)
// console.log(electronic);
//*-> in Arrays concate method is add new array nad return a new array
const newcnct = electronic.concat(computer)
// console.log(newcnct);

//speade operator

const allNewHerroes = [...electronic, ...computer]
// console.log(allNewHerroes);


const mtpArray = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10, [11]]];
const newflateArray = mtpArray.flat(Infinity)
console.log(newflateArray);


/// knowing the arrays or not 
console.log(Array.isArray("kaif"));
console.log(Array.from("kaif"));



let Score1 = 100;
let Score2 = 200;
let Score3 = 300;
console.log(Array.of(Score1, Score2, Score3));