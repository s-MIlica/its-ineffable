// ## Четврти дан

// На страници постоје 2 дугмета за наручивање (као на страници пицерије, ORDER)
// И постоје 2 дугмета за наручивање одмах 

// 1. Дугмићи за наручивање повећавају бројач
// 2. Дугмићи за наручивање одмах ресетују бројач на нула и исписују додатну поруку (Порука у облику: Наручили сте [X] пица, [ danasnji datum i vreme ])
// Напомена:  X је бројач, проверити да ли је бројач 0, и ако јесте кликом на наручивање одмах избацује одговарајућу поруку за грешку

let pizzaCounter = 0;
let OrderBttn = document.getElementsByClassName('btn-order');
//console.log(OrderBttn);
let counter = document.getElementById('counter')
//console.log(counter);

for (let button of OrderBttn) {
button.addEventListener('click', function() {
    orderPizza(button);
});
}

function orderPizza (element) {
    //console.log(element);
    pizzaCounter++;
    counter.innerHTML = pizzaCounter;
}


let OrderNowBttn = document.getElementsByClassName('btn-order-now');
console.log(OrderNowBttn);

    var day = dateTimeNow.getDate();
    var month = dateTimeNow.getMonth();
    var year = dateTimeNow.getYear();
    
    

for (button of OrderNowBttn) {
button.addEventListener('click', function () {
    counter.innerHTML = `Naručili ste ${pizzaCounter} pizza, [${day}.${month}.${year}.]`;
    counter.innerHTML = 0;
    orderPizzaNow(counter);
} );

function orderPizzaNow(reset) {
    console.log(reset);
    
    if (counter <= 0) {
        window.alert('GREŠKA!!!');
    }
    
}

}