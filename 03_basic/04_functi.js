/// object

const user = {
    UserName: "kaif",
    age: 14,
    Email: "kaif@raza.com",
    welcommessage: function() {
        console.log(`${this.UserName} , Welcome TO my Website`);
    }

}

// user.welcommessage()
// user.UserName = "raza"
// user.welcommessage()



// console.log(this);


// in node js this keyword refrer to empty Object




// function kaif() {
//     console.log(this);
// }
// kaif()



//  const a =function () {
//     let username = "raza"
//     console.log(this.username);
// }
// kaif()



// const arr =()=> {
//     let username = "raza"
//     console.log(this.username);
// }
// kaif();



// Arrow Function 

// const arro = (num1, num2) => {
//     return num1 + num2
// }


// impleset return
// const arro = (num1, num2) => num1 + num2

// const arro = (num1, num2) => (num1 + num2)


const arro = (num1, num2) => ({username: "kaif"})

console.log(arro(5, 6));



