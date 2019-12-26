import React from 'react';
import { getUserInfo } from '../utilities/forum-services';

const Profile = (history, match, logIn) => {
    let {username, name, surname, email} = ''
    let userID;
    console.log(logIn)

    if(logIn) {
        return userID = logIn.user_id
    }
    // userID = match.params.user_id

    console.log(userID)
    getUserInfo(userID).then(data => {
        if(data.success) {
            username = data.user.username
            console.log(username)
            name = data.user.name
            surname = data.user.surname
            email = data.user.email
        } else console.log('nešto nije uspelo')
    })

    return (
        <div>
            <label>Username:</label>
            <label>{username}</label>
            <label>Ime:</label>
            <label>{name}</label>
            <label>Prezime:</label>
            <label>{surname}</label>
            <label>Email:</label>
            <label>{email}</label>
        </div>
    )
}

export default Profile;