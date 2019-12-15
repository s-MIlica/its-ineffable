let n = 4;
let poklopac = ' '.repeat(n-1) + '*';
console.log(poklopac);

for (let i = 0; i < n-1; i++) {
    let row = ' '.repeat(n-i-2) + '*' + ' '.repeat(2*i+1) + '*';
    console.log(row);
}

for (let i = n - 2; i > 0; i--) {
    let row = ' '.repeat(n-i-1) + '*' + ' '.repeat(2*i-1) + '*';
    console.log(row);
}
console.log(poklopac);