// Koliko zadati mesec ima dana, Postoji boolean koji govori da li je godina prestupna

let mesec = 8; 
let godina = 2004;



if (mesec%2 == 0 && mesec <= 6 && mesec != 1) {
    console.log(`Mesec ima 31 dan`);

} else if (mesec%2 != 0 && mesec < 6 && mesec != 1) {
        console.log(`Mesec ima 30 dana`); 
    
    } else if (mesec%2 == 0 && mesec > 7) {
        console.log(`Mesec ima 30 dana`);
        
        } else if (mesec%2 != 0 && mesec >= 7) {
            console.log(`Mesec ima 31 dan`);
            
            } else if (godina%4 == 0) {
                console.log(`Mesec ima 29 dana`);
            
                } else {
                console.log(`Mesec ima 28 dana`);
                }
