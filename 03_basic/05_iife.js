function kaif() {
    console.log("Db Connected");
}
kaif();

//IFFE 
// basically remove goloble pollution in js that i used iife function 


(function kaif() {
    console.log("Db Connected");
})();



(function kaif() {
    console.log("Db Connected seond");
})()

/// arrow function
