// stack(primitive type data);
// heap(non - primitive / refreence)

let myVariable = "kaif"

// in stack doesnot change orignal data its make a copy data to give another vsribles

let anthorVariable = myVariable;
anthorVariable = "amit"
console.log(myVariable);
console.log(anthorVariable);





// in heap memory does not make copy of the data its chnage directly original data from the refrence allocation

let user = {
    name: "username",
    userid: 1,
    useremail: "useremail@gmail.com "

}
let user1 = user;

user1.userid = 2,

    console.log(user)
console.log(user1);