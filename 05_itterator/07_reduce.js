const mynumber = [1, 2, 3, 4]

const total = mynumber.reduce((accumulator, currentValue) => {
    // accumulator is add value and return value in javascript
    // accumulator :- in accumulator we passed the  initital value 
    // currentValue fetch the data from the array in javscript
    // console.log(`accumulator: ${accumulator}`);


    //console.log(`currentValue: ${currentValue}`);
    return accumulator + currentValue
}, 0)



//console.log(total);





//Shoping cart in oline marketing like flipcart

const cart = [
    {
        ProductName: "T-shirt",
        ProductPrice: "1999"
    },
    {
        ProductName: "shirt",
        ProductPrice: "999"
    },
    {
        ProductName: "Trouser",
        ProductPrice: "700"
    },
    {
        ProductName: "Mouse",
        ProductPrice: "500"
    },
    {
        ProductName: "KeyBord",
        ProductPrice: "200"
    },
]



const TotalProductPrice = cart.reduce((acc, item) => {
    return acc + parseInt(item.ProductPrice)
}, 0)
console.log(TotalProductPrice);











