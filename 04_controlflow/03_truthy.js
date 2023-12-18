// const useEmail = "Kaif@gmail.com"
// if(useEmail) {
//     console.log("User Email");
// } else {
//     console.log("donot have user Email");
// }

// falsy Value

// 1 false
// 2 0 zero
// 3 BigInt
// 4 0n
// 5 null
// 6 undefined
// 7 NaN

// truthy Value
// 1 "0"
// 2 'false'
// 3 " "
// 4 []
// 5 {}
// 6 function name (){}

// check array empty or not 

const UserId = [];

if(UserId.length === 0) {
    console.log("array is empty");
}

const emptyobj = {}
if(Object.keys(emptyobj).length === 0) {
    console.log("object is empty");
}

//nullish colescing Operator  (??) null and undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = undefined ?? 10 ?? 15

console.log(val1);


//TERNARY OPERATOR 


// conditon ? true : false 

const price = 500;
price >= 500 ? console.log("yes") : console.log("no");
