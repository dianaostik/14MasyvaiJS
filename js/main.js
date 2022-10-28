
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

let biggest = 0;
for (let d = 0; d < rnd2dArr.length; d++) {
    for (let e = 0; e < rnd2dArr[d].length; e++) {
        if (rnd2dArr[d][e] > biggest) {
            biggest = rnd2dArr[d][e];
        }
    }
}
console.log(biggest);

//c

let summa = 0;
for (let g = 0; g < rnd2dArr.length; g++) {
    for (let f = 0; f < rnd2dArr[g].length; f++) {
            summa += rnd2dArr[g][f];
    }
}
console.log(summa);


//d

let newArray = [];
for (let h = 0; h < rnd2dArr.length; h++) {
    newArray[h] = [];
    for (let j = 0; j < rnd2dArr[h].length; j++) {
         newArray[h][j] = rnd2dArr[h][j] - j;   
    }
}
console.log(newArray);