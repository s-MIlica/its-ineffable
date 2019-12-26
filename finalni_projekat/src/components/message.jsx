import React from 'react';

const Message = ({history, user_id, username, message, datum, timestamp}) => {
    let timeStamp = new Date (timestamp)

    datum = `${timeStamp.getHours()}:${timeStamp.getMinutes()} ${timeStamp.getDate()}.${timeStamp.getMonth()}.${timeStamp.getFullYear()}`

    return (
        <div>
            <label>{message}</label>
            <label>{datum}</label>
            <label onClick={() => {history.push(`/profile/${user_id}`)}}>{username}</label>
        </div>
    )
}

export default Message;