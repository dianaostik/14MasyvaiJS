
// ------ 1 uzduotis
console.log("--------- 1 uzduotis ---------");


for (let i = 0; i < 30; i++) {
    let items = [Math.round(5 + Math.random() * 20)];
    console.log(items);
}




// ------ 2 uzduotis
console.log("--------- 2 uzduotis ---------");

//  a)

let sum = 0;
for (let i = 0; i < 30; i++) {
    let items = [Math.round(5 + Math.random() * 20)];
    if (items > 10) {
        sum++;  
    }
    console.log(items);
}
 console.log(sum);

