var pet;
var text = "";
for (pet = 1; pet < 51; pet++) {
     if (pet%5==0) {
         text += pet + ", ";
     }
}
console.log(text);