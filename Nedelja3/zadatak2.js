// 2. Написати функцију која израчунава цену пице по квадратном центиметру (уносе се цена и полупречник)

function priceCM(price, r) {
    let P = Math.pow(r, 2) * Math.PI; //površina pice
    let priceCM = price / P;
    //return priceCM;                   da li je potrebno uraditi return????
}
console.log(priceCM(300, 15));
