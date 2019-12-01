
const username = document.querySelector('#username');
const password = document.querySelector("#password");
const button = document.querySelector("#button");

button.addEventListener('click', (e) => {
    console.log(e.target);
    checkUsername()
    checkPassword()
    checkJSON()
});

function checkUsername() {
    console.log(username.value);
    if (username.value.length < 3 || username.value.length > 15) {
        return alert('Username must be between 3 and 15 characters long!');
    }
    let first = username.value.charAt(0);
    if (isNaN(first) == false) {
        return alert("Username can't start with a number!");
    }
};

function checkPassword() {
    console.log(password.value);
    if (password.value.length < 3 || password.value.length > 15) {
        return alert('Password must be between 3 and 15 characters long!');
    }
};

var getJSON = JSON.parse('[ {"Username": "Pera","Password": "pera123"},{"Username": "Mika","Password": "mika123"},{"Username": "Milojka","Password": "milojka123"}, {"Username": "Živka","Password": "Živka123"}]')
console.log(getJSON);


function checkJSON () {
        getJSON.forEach (element => {
            if (element.Username == username.value && element.Password == password.value) { 
                return console.log(true)
            } else {
                    return console.log(false) 
                    }
        });   
}

// 5. Како бисмо ово урадили са Backend-ом који треба да прими информације из форме, и на основу тога нам враћа true/false? * само описати процес
    /* Napravili bismo funkciju koja uzima podatke sa backend-a. Zatim bismo napravili novu funkciju koja prolazi kroz sve elemente niza i upoređeuje ih sa unetim username-om 
    i password-om. Ako bi pronašap poklapanje vratio bi true, a ako ne vratio bi false */
