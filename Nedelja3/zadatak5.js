// Написати функцију која враћа колико пице вам је довољно за доживотно снабдевање
// Уноси се колико пице поједете на месечном нивоу, и колико година имате (Рачуна се да је довољно достављати до стоте године)

function pizzaLifeSupply(pPM, age) {        //pPM - pizza per month
    let lifeSupply = (100 - age) * 12 * pPM;
    return lifeSupply;
}
console.log(pizzaLifeSupply(10, 26));