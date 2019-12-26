import React from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react';
// import { getAllTopics } from '../utilities/forum-services';
// import { useEffect } from 'react'
// import { getAllTopicMessages } from '../utilities/forum-services'
// import { useState } from 'react'

function Topic({topic_id, history, topic}) {
    // const [title, setTitle] = useState(top.title);

    // useEffect(() => {
    //     getAllTopics() 
    //     .then(data => {
    //         setTitle(data.topics.title)
    //     })
    // }, [topic_id])
    // console.log(topic_id)
    // function handleClink() {}

    return (
        
        <li className="lista-tema" onClick={() => history.push(`/chat/${topic_id}`)}> {topic.title.toString()}</li>
            
    )
}

export default Topic


        