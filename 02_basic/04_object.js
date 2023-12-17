const obje = new Object()// object declaretion singleton object
const obje2 = {} //non sigletone object

obje2.id = 212524;
obje2.Name = "kaif";
obje2.age = 2
obje2.IsLogedIn = false

// console.log(obje2);



const newUser = {
    email: "user@gmail.com",
    FullName: {
        userFullName: {
            UserFirstName: "kaif",
            UserLastName: "Raza"
        }
    }
}
// console.log(newUser.FullName.userFullName);



const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}

// const obj3 = {obj1, obj2}
// (method) ObjectConstructor.assign<T extends {}, U>(target: T, source: U): T & U (+3 overloads)

// Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.

// @param target — The target object to copy to.

// @param source — The source object from which to copy properties.




// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}


console.log(obj3);


// coming from server 
const user1 = [
    {
        id: 1,
        email: "kaif@786",
    },
    {
        id: 1,
        email: "kaif@786",
    },
    {
        id: 1,
        email: "kaif@786",
    },
    {
        id: 1,
        email: "kaif@786",
    },
    {
        id: 1,
        email: "kaif@786",
    },
];





// extract the key on the object in the help of keys 

console.log(Object.keys(newUser));


// extract the key on the object in the help of value 
console.log(Object.values(newUser));
// extract the key on the object in the help of entries 
console.log(Object.entries(newUser));

console.log(newUser.hasOwnProperty('email'));
