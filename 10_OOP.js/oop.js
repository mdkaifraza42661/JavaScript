const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function() {
        console.log(`Welcome ${this.username}`);

    }

    return this
}
// new key word is basically is instance of class 
// instance is basically is create new object in javascrpit
const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);


// instance of 
//In JavaScript, the instanceof operator is used to check whether an object is an instance of a specific class or constructor function. It tests the presence of constructor.prototype in the object's prototype chain. This operator is particularly useful for understanding inheritance relationships and for confirming the type of an object at runtime.

// Define a constructor function
function Animal() {
}

// Define another constructor function
function Dog() {
}

// Set the prototype of Dog to be an instance of Animal
Dog.prototype = new Animal();

// Create a new instance of Dog
const myDog = new Dog();

// Use instanceof to check the instance type
console.log(myDog instanceof Dog);    // true, because myDog is an instance of Dog
console.log(myDog instanceof Animal); // true, because Dog inherits from Animal
