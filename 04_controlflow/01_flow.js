// if(true) {
//     console.log("kaif");
// }


//
// < ,> ,<=, >= , ==, !=, ===,
// const temp = 41;

// if(temp === 41) {
//     console.log("equal to 41");
// } else {
//     console.log("less than or greater than 41");
// }



// const score = 200;

// if(score > 100) {
//     let power = 'fly';
//     console.log(`User power ${power}`);
// }
// console.log(`User power ${power}`); // refrenceerror  power is not defined




/*
// shorthandNotance

const balance = 500;

// if(balance >= 500) console.log("test");
if(balance > 500) {
    console.log("less than 500");
} else if(balance > 750) {
    console.log("less than 750");
} else if(balance > 900) {
    console.log("less than 900");
} else {
    console.log("less than 500");
}

*/



const userLoggedIn = true;
const debitCard = true;
const LoggedfromGoogle = false;
const LoggedfromEmali = true

/// or Stattement  &&
if(userLoggedIn && debitCard) {
    console.log("allow to buy");
}


/// yay to yay ya toh wo

if(LoggedfromEmali || LoggedfromGoogle) {
    console.log("User Loging");
}