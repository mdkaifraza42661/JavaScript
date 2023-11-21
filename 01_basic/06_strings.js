
//basic string to concate this string
const Name = "kaif ";
const repoCount = 50;
console.log(Name + repoCount);

// string interpolaton
console.log(`my name is ${Name} and my repo count is ${repoCount}`);






const String1 = new String("Amit")
console.log(typeof String1);
//does not change original value beacuse of heap memory and can not make copy  its directly change original
console.log(String1.toUpperCase());
console.log(String1.length);
// where is situated charecter simplay pass the index value and get the charecter 
console.log(String1.charAt(2));//i

console.log(String1.indexOf('i'));//2

let ss = String1.substring(0, 2); // Am its does not support negative ndex and not work in last value  
console.log(ss);

let sl = String1.slice(-5, 2);
console.log(sl);


// trim 
let username = "      kaif raza";

console.log(username);
console.log(username.trim());



const url = "https//kaif.com/%78/raza"

let newurl = url.replace('%78', '_')
console.log(newurl);


console.log(newurl.includes("kaif"));





