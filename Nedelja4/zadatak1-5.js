//zadatak 1

let recept1 = 
{
    ime: 'Palačinke',
    težina: 'Početni',
    sastojci: 'jaja, mleko, brašno, ulje, so, kisela voda, cimet (opciono)',
    receptInfo: function() {
        return `${this.ime}:\n Težina: ${this.težina} \n Sastojci: ${this.sastojci}`;
    }
}
console.log(recept1.receptInfo());

let recept2 = 
{
    ime: 'Macaroons - badem i čokolada',
    težina: 'Majstor',
    sastojci: 'belanca, šećer, mleveni badem, čokolada za kuvanje, slatka pavlaka, ekstrat vanile',
    receptInfo() {
        return `${this.ime}:\n Težina: ${this.težina} \n Sastojci: ${this.sastojci}`;
    }
}
//console.log(recept2.receptInfo());

let recept3 = 
{
    ime: 'Kafa Mus Torta',
    težina: 'Srednji',
    sastojci: 'čokolada za kuvanje, puter, kakao, so, jaja (odvojeno žumance i belance), šećer, mleko, gustin, želatin, kafa, ekstrat vanile',
    receptInfo() {
        return `${this.ime}:\n Težina: ${this.težina} \n Sastojci: ${this.sastojci}`;
    }
}
//console.log(recept3.receptInfo());

let recept4 = 
{
    ime: 'Ruska Salata',
    težina: 'Početni',
    sastojci: 'pileće grudi, krompir, grašak, šargarepa, kiseli krastavci, majoneza, biber',
    receptInfo() {
        return `${this.ime}:\n Težina: ${this.težina} \n Sastojci: ${this.sastojci}`;
    }
}
//console.log(recept4.receptInfo());


//zadatak 2

function LakiIPocetni (recept) {
    if (recept.težina == 'Početni' || recept.težina == 'Lako') {
        recept = `<${recept.ime}> \n Težina: <${recept.težina}> \n Sastojci: [${recept.sastojci}]`;
        return console.log(recept);
    }
}
LakiIPocetni(recept2); //ako recept nije lak ili početan ništa se ne dešava

//zadatak 3

let sastojak1 = 
{
    ime: 'jaje',
    kolicina: 3,
    cena: 13
}

let sastojak2 = 
{
    ime: 'šećer',
    kolicina: 0.1,          //količine izražene u kg i l (pod uslovom da ja znam da prebacujem g i ml u kg i l)
    cena: 130
}

let sastojak3 = 
{
    ime: 'mleveni badem',
    kolicina: 0.1,
    cena: 270
}

let sastojak4 = 
{
    ime: 'čokolada za kuvanje',
    kolicina: 0.15,
    cena: 270
}

let sastojak5 = 
{
    ime: 'ekstrat vanile',
    kolicina: 0.0012,
    cena: 80
}

let sastojak6 = 
{
    ime: 'slatka pavlaka',
    kolicina: 0.25,
    cena: 300
}

//zadatak 4

recept2 = 
{
    ime: 'Macaroons - badem i čokolada',
    težina: 'Majstor',
    sastojci: [sastojak1, sastojak2, sastojak3, sastojak4, sastojak5, sastojak6],
    receptInfo() {
        return `${this.ime}:\n Težina: ${this.težina} \n Sastojci: ${this.sastojci}`;
    }
}
//console.log(recept2.sastojci[1]);

//zadatak 5 

recept2.cena = function () {
    let cena = 0;
    let cenaUkupna = 0;
    for (let i = 0; i <= (this.sastojci.length - 1); i++ ) {
        cena = recept2.sastojci[i].kolicina * recept2.sastojci[i].cena;
        cenaUkupna += cena;    
        }
    return cenaUkupna;
}

console.log(`Ukupna cena sastojaka potrebnih za ovaj recept je ${recept2.cena()} dinara`);