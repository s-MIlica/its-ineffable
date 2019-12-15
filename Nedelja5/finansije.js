const select = document.querySelector('#select');
const number = document.querySelector('#number-input');
const text = document.querySelector('#text-input');
const button = document.querySelector('#butn');

const zaradaKutija = document.querySelector('#zarada-kutija');
const trosakKutija = document.querySelector('#trosak-kutija');

const ukupnaZarada = document.querySelector('#ukupna-zarada');
let zarada = 0;
const sveUkupno = document.querySelector('#sve-ukupno');
let ukupno = 0;
const ukupanTrosak = document.querySelector('#ukupan-trosak');
const ukupanTrosakProcenat = document.querySelector('#ukupan-trosak-label');
let trosak = 0;

button.addEventListener('click', checkSelector);
text.addEventListener('keydown', (e) => {
    if (e.keyCode == 13) { checkSelector() }
});

function checkSelector () {
    if (select.value == 'zarada') { dodajZarada() } 
    else { dodajTrosak() };
}

function dodajZarada () {
    if (text.value == '') { alert('Morate uneti opis transakcije!'); return; }
    if (isNaN(number.value) || number.value <= 0) { alert('Morate uneti BROJ veći od nule!'); return; }

    let zElemDiv = document.createElement('div');
    zElemDiv.className = 'zarada-element';
    let zElemTxt = document.createElement('div');
    zElemTxt.className = 'zarada-element-txt';
    zElemTxt.style.display = 'inline-block';
    let zLabel = document.createElement('label');
    zLabel.className = 'zLabel';

    zElemTxt.appendChild(zLabel);

    let deleteBtnDiv = document.createElement('div');
    deleteBtnDiv.className = 'delete-btn-div';
    deleteBtnDiv.style.display = 'inline-block';
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = 'X';
    
    deleteBtnDiv.appendChild(deleteBtn);

    zElemDiv.appendChild(zElemTxt);
    zElemDiv.appendChild(deleteBtnDiv);

    zaradaKutija.appendChild(zElemDiv);

    zLabel.innerHTML = `${number.value} RSD - ${text.value}`;

    let numberBr = Number(number.value);
    ukupno += numberBr;
    zarada += numberBr;
    ukupnaZarada.innerHTML = zarada;
    sveUkupno.innerHTML = ukupno;

    deleteBtn.addEventListener('click', (e) => {
        e.target.parentElement.parentElement.remove();
        ukupno -= numberBr;
        zarada -= numberBr;
        ukupnaZarada.innerHTML = zarada;
        sveUkupno.innerHTML = ukupno;
    });

    number.value = '';
    text.value = '';

}

function dodajTrosak () {
    if (text.value == '') { alert('Morate uneti opis transakcije!'); return; }
    if (isNaN(number.value) || number.value <= 0) { alert('Morate uneti BROJ veći od nule!'); return; }

    let tElemDiv = document.createElement('div');
    tElemDiv.className = 'trosak-element';
    let tElemTxt = document.createElement('div');
    tElemTxt.className = 'trosak-element-txt';
    tElemTxt.style.display = 'inline-block';
    let tLabel = document.createElement('label');
    tLabel.className = 'tLabel';
    let tLabelProcenat = document.createElement('label');
    tLabelProcenat.className = 'tLabel-procenat';
    tLabelProcenat.style.display = 'block';
    tElemTxt.appendChild(tLabel);
    tElemTxt.appendChild(tLabelProcenat);

    let deleteBtnDiv = document.createElement('div');
    deleteBtnDiv.className = 'delete-btn-div';
    deleteBtnDiv.style.display = 'inline-block';
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = 'X';
    
    deleteBtnDiv.appendChild(deleteBtn);

    tElemDiv.appendChild(tElemTxt);
    tElemDiv.appendChild(deleteBtnDiv);

    trosakKutija.appendChild(tElemDiv);

    tLabel.innerHTML = `${number.value} RSD - ${text.value}`;
    
    let numberBr = Number(number.value);
    let uZarada = Number (ukupnaZarada.value);
    let x = Math.round(100 * numberBr / uZarada);
    if (x == Infinity) {return x = 0}
    tLabelProcenat.innerHTML = `${x}%`;

    ukupno -= numberBr;
    trosak += numberBr;
    ukupanTrosak.innerHTML = (- trosak);
    sveUkupno.innerHTML = ukupno;
    
    let uTrosak = Number (ukupanTrosak.value);
    console.log(uTrosak);
    let y = Math.round(100 * uTrosak / uZarada);
    if (y == Infinity) {return y = 0};
    ukupanTrosakProcenat.innerHTML = `${y}%`;

    deleteBtn.addEventListener('click', (e) => {
        e.target.parentElement.parentElement.remove();
        dodajProcenat();
    });

    number.value = '';
    text.value = '';
}

function dodajProcenat () {
    
}