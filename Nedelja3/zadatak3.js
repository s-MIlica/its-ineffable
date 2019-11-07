// 3. Написати функцију која враћа цену најјефтиније пице од 3 унете (уносе се полупречници и цене), користећи две функције изнад.

function minimumThree(a, b, c) {
    if (a < b && a < c) {
        return console.log(`Posle poređenja cene po kvadratnom centrimetru tri pizze  došli smo do zaključka da je pizza broj 1 najjeftinija među njima`);
    
    } else if (b < c) {
        return console.log(`Posle poređenja cene po kvadratnom centrimetru tri pizze  došli smo do zaključka da je pizza broj 2 najjeftinija među njima`);
    
    } else {
        return console.log(`Posle poređenja cene po kvadratnom centrimetru tri pizze  došli smo do zaključka da je pizza broj 3 najjeftinija među njima`);
    
    }
}


function priceCM(price, r) {
    let P = Math.pow(r, 2) * Math.PI; //površina pice
    let priceCM = price / P;
    return priceCM;

}


function cheapestPizza(p1, r1, p2, r2, p3, r3) {            //p se odnosi na cenu, a r na poluprečnik
    let pizza1 = priceCM(p1, r1);
    let pizza2 = priceCM(p2, r2);
    let pizza3 = priceCM(p3, r3);

    minimumThree(pizza1, pizza2, pizza3);
}
cheapestPizza(300, 10, 300, 20, 300, 20);