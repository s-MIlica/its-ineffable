// n počinje od nule

let n = 4;
let k = 5;
let gr = 0; // gr = gornji deo razlomka
let dr = 0; // dr = donji deo razlomka
let zbir = 0;

for (let counter = 0; counter <= n; counter++) {
    gr = counter + 1;
    dr = k + counter;
    zbir += Math.pow(-1, counter) * gr/dr;
}
console.log(`Rešenje razlomka je ${zbir}`);
