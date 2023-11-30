// singleton 

// object literials 
// object.create 
const symb = Symbol("kaif")

const userid = {
    id: 1,
    Name: "kaif", /// by default Name is considerd as a string "Name" in heap memory
    "full Name": "Md Kaif Raza",
    //symb: "key1",
    [symb]: "kaif",
    age: 25,
    location: "Bokaro",
    Email: "kaif@gmail.com",
    islogedIn: false,
    lastLogindays: ["mon", "tue"]


}//object


console.log(userid.id);
console.log(userid["Name"]);// diffrent approch to log the object element
console.log(userid["full Name"]);
console.log(userid[symb]);
console.log(typeof userid[symb]);
console.log(symb);
console.log(userid);
/// change the value of object 

userid.id = 2;
console.log(userid.id);


// Object.freeze(userid) // freeze means you can control the edited object

// userid.Name = "akif"
console.log(userid.Name);

// adding the sub 
// add some element in obje 

userid.greeting = function() {
    console.log("hellow function");
}
userid.greetingTwo = function() {
    console.log(`hellow function ${this.Name}`);
}



console.log(userid.greeting());
console.log(userid.greetingTwo());

