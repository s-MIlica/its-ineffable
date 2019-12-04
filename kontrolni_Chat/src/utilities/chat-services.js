var URL = "https://coetus.herokuapp.com";
var VERSION = "/api";


function getMessages () {
    return fetch (`${URL}${VERSION}/message`)
    .then((response => response.json()),
        error => console.log(error))

}

function getUserMessage(username) {
    return fetch(`${URL}${VERSION}/message`,{
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'POST',
        body: JSON.stringify({
          username: username
        })
    })
    .then(response => response.json()
        , (error) => {
            console.log(error);
        })
}


function saveMessage(username, message) {
    return fetch(`${URL}${VERSION}/message`,{
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'PUT',
        body: JSON.stringify({
          username: username,
          message: message
        })
    })
    .then(response => response.json()
        , (error) => {
            console.log(error);
        })
}

export {
    getMessages,
    getUserMessage,
    saveMessage
}