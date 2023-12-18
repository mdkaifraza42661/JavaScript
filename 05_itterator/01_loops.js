// for Loop


for(let i = 0; i < 10; i++) {
    const element = i;
    if(i == 5) {
        // console.log("null");
    }
    //console.log(element);
}

for(let i = 0; i <= 10; i++) {
    //console.log(`Outer loop Value ${i}`);
    for(let j = 1; j <= 10; j++) {

        // console.log(`inner loop value ${j} and inner loop ${i}`);
        //console.log(`${i} * ${j} =` + i * j);
    }

}

let myarr = ["flase", "spiderman", "batman", "ironman"]
//console.log(myarr.length);
for(let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
    //console.log(element);

}
for(let i = 0; i <= 20; i++) {
    const element = i;
    if(i == 5) {
        console.log("detected");
        break;
        //continue;
    }
    console.log(element);

}
for(let i = 0; i <= 20; i++) {
    const element = i;
    if(i == 5) {
        console.log("detected");
        // break;
        continue;
    }
    console.log(element);

}