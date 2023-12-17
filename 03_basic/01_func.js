// function symyname() {
//     console.log("k");
//     console.log("a");
//     console.log("i");
//     console.log("f");
// }
// symyname()
// add two number

/*
function addtwonumber(num1, num2) //parameters
{
    // return num1 + num2
    if(typeof num1 === 'number' && typeof num2 === 'number') {
        console.log(num1 + num2);
        return num1 + num2
    }
    console.log("Error");
}
addtwonumber(5, 6) // Arguments
*/


// User loging function 

// function Userlogeedin(username) {
//     if(username === undefined) {
//         console.log("Please enter the userName");
//         return
//     }
//     return `${username} is LoggedIn`
// }
// // let Name = Userlogeedin("kaif");
// let Name = Userlogeedin();

// console.log(Name);



function Userlogeedin(username = "Kashif") // by default Value
{
    if(username === undefined) {
        console.log("Please enter the userName");
        return
    }
    return `${username} is LoggedIn`
}
// let Name = Userlogeedin("kaif");
let Name = Userlogeedin("kaif");

console.log(Name);


