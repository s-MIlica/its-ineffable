import React from 'react'
import { useState } from 'react'
import { login } from '../utilities/forum-services'
import { withRouter } from 'react-router-dom';

function LogIn({setUser, history}) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')   
    
    function handleSubmit() {
        login({username, password})
        .then(data => {
            if (data.success) {
                setUser(data.user)
                history.push('/topic-list')
                console.log('ulogovan!')
                console.log(data.user)
            }
            else console.log('Niste ulogovani');
        })
    }


    return (
        <form className="RL-forma">
            <label className="Login-label">LogIn</label> <br/>
            <input type="text" placeholder="username" required onInput = {e => {
                setUsername(e.target.value);
            }}/>
            <br/>
            <input type="password" placeholder="password" required onInput = {e => {
                setPassword(e.target.value);
            }}/>
            <br/>
            <input type="submit" value="LogIn" onClick = {(e) => {
                e.preventDefault()
                handleSubmit()
                }}/>
        </form>
    )
}

export default withRouter (LogIn);