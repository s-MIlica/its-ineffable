// 1. Написати функцију која враћа максимум од 3 броја (уносе се 3 броја)

function maximumThree(a, b, c) {
    if (a > b && a > c) {
        return a;
    
    } else if (b > c) {
        return b;
    
    } else {
        return c;
    
    }
}
console.log(maximumThree(102, 105, 75));
