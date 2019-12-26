import React from 'react';
import { useState, useEffect } from 'react';
import { register } from '../utilities/forum-services';

function Register({setUser, history}) {
    
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [pwConfirm, setPwConfirm] = useState('')
    // const [validPw, setValidPw] = useState(false)
    const [isSame, setIsSame] = useState(false)
    

    // useEffect(() => {
    //     function isValidPw(){
    //         if((/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g).test(password)){
    //             setValidPw(true)
    //         }
    //         else{
    //             setValidPw(false)
    //         }
    //     }
    //     console.log(password)
    //     isValidPw()
    // },[password])

    useEffect(() => {
        setIsSame(pwConfirm === password)
        // console.log(pwConfirm === password)
    },[pwConfirm,password])

    function handleSubmit() {
        if (!isSame) 
            return
        register({name, surname, username, email, password})
        .then(data => {
            if (data.success) {
                setUser(data.user)
                history.push('topic-list')
            }
            else console.log('Registracija neuspela')
        })
    }

    return (
        <form className="RL-forma">
            <label className="Register-label">Register</label> <br/>
            <label className="RL-label">Ime:</label>
            <input type="text" placeholder="Ime" required onInput={e => {
                setName(e.target.value)
            }}/> <br/>
            <label className="RL-label">Prezime:</label>
            <input type="text" placeholder="Prezime"required onInput={e => {
                setSurname(e.target.value)
            }}/> <br/>
            <label className="RL-label">Username:</label>
            <input type="text" placeholder="Username"required onInput={e => {
                setUsername(e.target.value)
            }}/> <br/>
            <label className="RL-label">Email:</label>
            <input type="email" placeholder="email"required onInput={e => {
                setEmail(e.target.value)
            }}/> <br/>
            <label className="RL-label">Lozinka:</label>
            <input type="password" placeholder="Lozinka"required onInput={e => {
                setPassword(e.target.value)
            }}/> <br/>
            <label className="RL-label">Potvrdite lozinku:</label>
            <input type="password" placeholder="Potvrdite lozinku"required onInput={e => {
                setPwConfirm(e.target.value)
            }}/> <br/>
            
            <input type="submit" value="Register" onClick={e => {e.preventDefault(); handleSubmit()}}/>

        </form>

    )
}

export default Register;