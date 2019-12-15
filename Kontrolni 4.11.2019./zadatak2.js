// Napisati program koji racuna prosek brojeva deljivih sa 7 u intervalu od M do N uključujući M i N

let m = 10, n = 100, brojM = m, jedan = 1, zbir = 0, prosek;

for (counter = 1; counter <= (n-m); counter++, brojM++) {
    if (brojM%7 == 0) {
        zbir += brojM;
        jedan++
    }
    
}
prosek = zbir / (jedan - 1);
    console.log(`Prosek brojeva deljivih sa 7 između ${m} i ${n} je ${prosek}`);