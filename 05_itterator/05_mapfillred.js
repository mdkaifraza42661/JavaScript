// const language = ["javascript", "css", "java", "python"];
// const rt = language.forEach((val) => {
//     console.log(val);
//     return val
//     // output
//     // undefined
// })

// console.log(rt);




// filter  
// its return some value 
// its is a higher order function 

const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const max = mynum.filter((item) => item > 5) // direct retun the value
// const mx = mynum.filter((i) => {
//     return i > 5
// })

const newmn = []
mynum.forEach((itm) => {
    if(itm > 5) {
        newmn.push(itm)
    }
})
//console.log(newmn);

const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
    {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
    {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
    {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
    {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
    {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
    {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
    {title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989},
];

let userbooks = books.filter((bk) => bk.genre === "History")
// console.log(userbooks);
userbooks = books.filter((bk) => {
    return bk.edition >= 1995
})

console.log("second", userbooks);


// console.log(max);