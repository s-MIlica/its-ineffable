import React from 'react';
import Message from './message';
import { getAllTopicMessages, putUserMessages } from '../utilities/forum-services';
import { useState } from 'react';
import { useEffect } from 'react';
// ruta /topic-list/{topic_id}
const Chat = ({match, history,  logIn}) => {
    // const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const [newMsg, setNewMsg] = useState({})
    let topicID = match.params.topic_id
    let user_id; 
    let username; 
    // let timestamp;
    // let topic_id;

    if (logIn) {
        user_id = logIn.user_id;
    }

    useEffect(() => {
    getAllTopicMessages(topicID)
    .then(data => {
        // if(data.success) {
            console.log(data.messages + 'dohvaćene poruke');

            setMessages(data.messages)
            // username = data.messages.username;
            // timestamp = data.messages.timestamp;
            // topic_id = data.messages.topic_id;


        // }
    })
}, [topicID, newMsg]) //topicID, newMsg

username = messages.username
let topic_id = topicID

function handleSubmit(username, topic_id, message){
    //dodaj novu poruku i stavi je u setNewMsg
    putUserMessages({username, topic_id, message})
    .then (data => {
        if (data.success) console.log(data.message)
    })


}
console.log(messages)

    return (
        <div>
            <div>
                
                <label>{}</label>
                {messages.map(mes => { return <Message history={history} key ={mes.message_id} user_id={user_id} username={mes.username} message={mes.message.toString()} timestamp={mes.timestamp}/>})}          
            </div>
                
                <div>
                    <input type="text" placeholder="Vaša poruka" required onInput={e => {setNewMsg(e.target.value)}}/>
                    <input type="submit" value="Pošalji" onClick={(e) => {e.preventDefault(); handleSubmit(logIn.username, topicID, newMsg)}}/> {/*newMsg */}
                </div>

        </div>
    )
}

export default Chat;