// 2. Написати функцију која израчунава цену пице по квадратном центиметру (уносе се цена и полупречник)

function priceCM(price, r) {
    let P = Math.pow(r, 2) * Math.PI; //površina pice
    let priceCM = price / P;

}
priceCM(300, 15);