import React from 'react'
import { getAllTopics, putUserMessages } from '../utilities/forum-services';
import { useState } from 'react';
import { useEffect } from 'react';
import Topic from './topic'
import StartNewTopic from './start_new_topic';

const TopicList = ({history, logIn, setTopics}) => {
    const [topic, setTopic] = useState([]);
    // setTopics = function () {}
    useEffect(()=>{
        getAllTopics()
        .then(data => {
            if(data.success){
            // console.log(data.topics);
            setTopic(data.topics);

            }
        })
    }, []) //newTopic kad napravim

    // console.log(topic)
    // setTopics = topic

    // setTopics = topic
    // console.log(setTopics + 'setTopics')



    // putUserMessages()
    // .then(data => {})

    // console.log(topic)
    // console.log(logIn)
    
    if(logIn){
    
    return (
        <div className="lista-tema">
            <ul>
                {topic.map((top) => {return <Topic key={top.topic_id} logIn={logIn} topic_id={top.topic_id} history={history} topic={top}></Topic>})}
            </ul>
            
            
            <StartNewTopic logIn={logIn} />
                
        </div>

    )} else {
        return (
            <div className="lista-tema">
            <ul>
            {topic.map((top) => {return <Topic key={top.topic_id} logIn={logIn} topic_id={top.topic_id} history={history} topic={top}></Topic>})}
        </ul>
        </div>
        )
    }
} /*doraditi*/

export default TopicList;