/*

        *
     *     *
  *           *
*                *
  *           * 
     *     *
        *
Za N=4
+5 
Alternativno:
   Do pola slike.
*/

 let n = 4, p = '', rupa, sredina, broj = 1;

 rupa = ' '.repeat(n-1);
     
 p = rupa + '*' + rupa;
 console.log(p);

        for (let i = 2; i <= n; i++) {
            rupa = ' '.repeat(n-i);
            sredina = ' '.repeat(broj);
            p = rupa + '*' + sredina + '*' + rupa;
            console.log(p);
            broj += 2;
        } 
        
        for (let j = 0; j < n-1; j++) {
            rupa = ' '.repeat(j+1);
            sredina = ' '.repeat(n - j -1);
            p = rupa + '*' + sredina + '*' + rupa;
            console.log(p);
        }
rupa = ' '.repeat(n-1);
p = rupa + '*' + rupa;
console.log(p);
