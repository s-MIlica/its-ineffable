// 1. Направити форму у HTML која се садржи од:
//     * Username (text)
//     * Password (password)
//     * Confirm (Button)
// 2. Направити JSON фајл који садржи информације о корисницима (низ објеката са Username и Password, креирајте макар 3 објекта)
// 3. Направити следеће провере:
//     * Username и password морају имати најмање 3 карактера и највише 15
//     * Username не сме почети бројем
// 4. Проверити да ли се унесени подаци налазе у датом JSON-у (иначе се то ради у Backend-у)
// 5. Како бисмо ово урадили са Backend-ом који треба да прими информације из форме, и на основу тога нам враћа true/false? * само описати процес

const username = document.querySelector("#username");
const password = document.querySelector("#password");
const button = document.querySelector("#button");

button.addEventListener('click', (e) => {
    console.log(e.target);
    checkUsername()
    checkPassword()
});

function checkUsername() {
    if (username.length < 3 || username.length > 15) {
        return alert('Username must be between 3 and 15 characters long!');
    }
    let first = username.charAt(0);
    if (isNaN(first) == false) {
        return alert("Username can't start with a number!");
    }
};

function checkPassword() {
    if (password.length < 3 || password.length > 15) {
        return alert('Password must be between 3 and 15 characters long!');
    }
};