import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from '../components/register';
import LogIn from '../components/login';
import TopicList from '../components/topics';
import Chat from '../components/chat';
import Profile from '../components/profile';

const Content = ({setUser, user, logIn, history, setTopics, topic}) => {
    return (
        <main className="main">
            <Switch>
                <Route exact path='/' component={(props) => <> <Register setUser={setUser} {...props}/> <LogIn setUser={setUser} {...props} /> <TopicList logIn={logIn} history={history} /> </>} />
                <Route path='/topic-list' component={(props) => <> <TopicList logIn={logIn} history={history}  {...props}/>  </>} />

                <Route path='/chat/:topic_id' component={(props) => <Chat history={history} user_id={user} username={user} logIn={logIn} {...props}/>} /> 
                <Route path='/profile/:user_id' component={(props) => <Profile logIn={logIn} {...props}/>} /> 

                {/* // Chat path='topic-list/topic_id' */}
            </Switch>
        </main>
    )
}

export default Content;

//message, timestamp
//<StartNewTopic logIn={logIn} />