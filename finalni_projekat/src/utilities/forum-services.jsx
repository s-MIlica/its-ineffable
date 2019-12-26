const URL = 'https://coetus.herokuapp.com'
const API = '/api/forum'
const USERS = '/users'
// const USER_INFO = '/:user_id'
const MESSAGE = '/message'
// const MESSAGE_TOPIC = '/:topic_id'
const TOPICS = '/topics'

function getAllUsers(){
    return fetch(`${URL}${API}${USERS}`)
        .then(res => res.json())
}

function register(user){
    let res = fetch(`${URL}${API}${USERS}`,{
        headers:{
            'Content-Type':'application/json; charset=utf-8' 
        },
        method:'PUT',
        body:JSON.stringify(user)
    }).then(res => res.json())
    return res
}

function login(user){
    let res = fetch(`${URL}${API}${USERS}`,{
        headers:{
            'Content-Type':'application/json; charset=utf-8' 
        },
        method:'POST',
        body:JSON.stringify(user)
    }).then(res => res.json())
    return res
}

function getUserInfo(USER_INFO){
    return fetch(`${URL}${API}${USERS}/${USER_INFO}`)
        .then(res => res.json())
}

function getAllMessages() {
    return fetch (`${URL}${API}${MESSAGE}`)
        .then(res => res.json())
}

function getAllTopicMessages(MESSAGE_TOPIC) {
    return fetch (`${URL}${API}${MESSAGE}/${MESSAGE_TOPIC}`)
        .then(res => res.json())
}

function putUserMessages(user) {
    let res = fetch (`${URL}${API}${MESSAGE}`, {
        headers: {
            'Content-Type':'application/json; charset=utf-8'
        },
        method: 'PUT',
        body: JSON.stringify(user)
    }).then (res => res.json())
    return res
}

function getAllTopics() {
    return fetch (`${URL}${API}${TOPICS}`)
        .then (res => res.json())
}

function putNewTopic(topic) {
    let res = fetch(`${URL}${API}${TOPICS}`, {
        headers: {
            'Content-Type':'application/json; charset=utf-8'
        },
        method: 'PUT',
        body: JSON.stringify(topic)
    }).then (res => res.json())

    return res
}

export {
    getAllUsers,
    register,
    login,
    getUserInfo,
    getAllMessages,
    getAllTopicMessages,
    putUserMessages,
    getAllTopics,
    putNewTopic
}