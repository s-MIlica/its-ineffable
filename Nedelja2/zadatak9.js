/*
    # #
   ## ##
  ### ###
 #### ####  
##### #####
*/

let n = 5, levo, desno = ' ', rupa = ' ', t = '#', p; 
for (let counter = 1; counter <= n; counter++) {
    levo = rupa.repeat(n - counter) + t.repeat(counter);
    desno += t;
    p = levo + ' ' + desno; //nisam sigurna da li treba razmak u sredini pa sam ga stavila za svaki slučaj (u slučaju da ne treba obrisati + ' ')
    console.log(p);
}