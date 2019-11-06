// 1. Написати функцију која враћа максимум од 3 броја (уносе се 3 броја)

function maximumThree(a, b, c) {
    if (a > b && a > c) {
        return console.log(`Posle poređenja brojeva ${a}, ${b} i ${c} došli smo do zaključka da je ${a} najveći među njima`);
    
    } else if (b > c) {
        return console.log(`Posle poređenja brojeva ${a}, ${b} i ${c} došli smo do zaključka da je ${b} najveći među njima`);
    
    } else {
        return console.log(`Posle poređenja brojeva ${a}, ${b} i ${c} došli smo do zaključka da je ${c} najveći među njima`);
    
    }
}
maximumThree(102, 86, 75);

