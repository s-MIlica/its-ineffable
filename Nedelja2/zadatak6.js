/* За првих 100 бројева исписати:

FizzBuzz ако је број дељив и са 3 и са 5
Fizz ако је број дељив само са 3
Buzz ако је број дељив само са 5
Број ако није дељив ни са 3 ни са 5 */

/*for (var i=1; i < 101; i++){
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
} */

var x=1;
var t='';
var str;

while (x<101) {
    if (x%3==0 && x%5==0) {
        str='FizzBuzz';
        t+=str + ', ';
        x=x+1;
    } 
       else if (x%3==0) {
        str='Fizz';
        t+=str + ', ';
        x=x+1; 
       }  
          else if (x%5==0) {
        str='Buzz';
        t+=str + ', ';
        x=x+1;
          } 
    else {
        t+=x + ', ';
        x=x+1;
    }
}
console.log(t);
