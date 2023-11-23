// jan 1, 1970  data will calculate in miliseciond javascript
//date
let date = new Date();
console.log(date);
console.log(date.toISOString());
console.log(date.toJSON());
console.log(date.toString());
console.log(date.getDate());
console.log(date.getMonth());

console.log(date.getFullYear());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());
// console.log(formatDate(new Date(new Date - 1)));
console.log(date.setDate(0));
console.log(date.setHours(5));
console.log(date.setMinutes(0));
console.log(date.getTimezoneOffset());


// set date
// let setDate = new Date(18, 2, 23, 5, 3); //(year , month ,date )
// console.log(setDate.toLocaleString());
// console.log(setDate.toLocaleDateString());

// you can use string also

// let setStringDate = new Date("10-02-2014");
// console.log(setStringDate.toLocaleDateString());
// console.log(setStringDate.toLocaleString());


date.toLocaleString('default', {
    minute: 25,
})
