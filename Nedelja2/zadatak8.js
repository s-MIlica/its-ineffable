/*
    #
   ## 
  ###
 ####   
#####
*/

let n = 5, rupa = ' ', p, t = '#'; 
for (let counter = 1; counter <= n; counter++) {
    p = rupa.repeat(n - counter) + t.repeat(counter);
    console.log(p);
}