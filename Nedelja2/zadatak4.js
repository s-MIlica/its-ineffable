var x;
var text = "";
for (x = 1; x < 5001; x = x +1) {
     if (x%5==0) {
         x.toString; 
         text += x + " ";
     }
}
console.log(`Prvih hiljadu brojeva koji su  deljivi  sa 5 su ${text}`);