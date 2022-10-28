
// ------ 1 uzduotis
console.log("--------- 1 uzduotis ---------");

rnd2dArr = [];
for (let i = 0; i < 10; i++) {
    rnd2dArr[i] = [];
    for (let a = 0; a < 3; a++) {
        rnd2dArr[i][a] = 5 + Math.round(Math.random() * 20);
    }
}
console.log(rnd2dArr);


// ------ 2 uzduotis
console.log("--------- 2 uzduotis ---------");

//  a)

let sum = 0;
for (let b = 0; b < rnd2dArr.length; b++) {
    for (let c = 0; c < rnd2dArr[b].length; c++) {
        if (rnd2dArr[b][c] > 10) {
            sum ++;
        }
    }
}
console.log(sum);

//b

