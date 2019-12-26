import React from 'react';
import { useState } from 'react';
import { putNewTopic, putUserMessages } from '../utilities/forum-services'
// import { getAllTopicMessages, putUserMessages, getAllTopics } from '../utilities/forum-services';
// import { useEffect } from 'react';

const StartNewTopic = ({logIn}) => {
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')
    // const [topicID, setTopicID] = useState('')
    let user_id 
    let username
    // let topic_id

    if (logIn) {
        user_id = logIn.user_id
        username = logIn.username
    }

    console.log(user_id)
    console.log(title)

    console.log(message)
    console.log(username)

   

        
    function handleSubmit() {
        console.log('nešto se deševa')
        putNewTopic({user_id, title})
        .then(data => {
            if (data.success) {
                console.log(data.message); 
                let topic_id=data.topic.topic_id;
                // setTopicID(data.topic.topic_id);
                
                putUserMessages({username,topic_id , message})
                .then(data => {
            if(data.success) {
                console.log(data.message)
            }
             })
                
            }
        });

        // console.log(topicID)
        

        // getAllTopicMessages()
        // .then(data => {
        //     if (data.success) {
        //         topic_id = data.messages.topic_id
        //         return topic_id
        //     }
        // });

        // putUserMessages({username, topic_id, message})
        // .then(data => {
        //     if (data.success) console.log(data.message)
        // })
    }

    // useEffect(() => {
        // getAllTopics()
        // .then(data => {
            
        //     if (data.topics.find(data.topics.title === title)) {
        //         return topic_id = data.topics.topic_id
        //     }
        //     else return
        // })
    // }, [setTitle])    

    return (
        <form>
            <input type="text" placeholder="Započni novu temu" title="Molim vas, proverite prvo u listi sa leve strane da li tema koju pokrećete već postoji" required 
            onInput={e => {setTitle(e.target.value)}}/> <br/>
            <input type="text" placeholder="Ostavite prvu poruku na vašoj novoj temi" onInput={e => {setMessage(e.target.value)}}/> <br/>
            <input type="submit" value="Započni novu temu" onClick={(e) => {e.preventDefault(); handleSubmit()}}/>
        </form>
    )
}

export default StartNewTopic;