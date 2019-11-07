// Написати функцију која исписује све елементе низа који су дељиви са 5

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 34];

function arrayDivFive(array) {
    array.forEach(element => {
        if (element%5 == 0) {
            console.log(element);
        }
    });
}
arrayDivFive(array);