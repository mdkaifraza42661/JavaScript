const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newnum = number.map((i) => {return i + 10});
// console.log(newnum);


const mynewarr = number.map((i) => {
    return i * 10
}).map((i) => {
    return i + 1
}).filter((i) => {
    return i >= 40
})
console.log(mynewarr);