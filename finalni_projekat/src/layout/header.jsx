import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Logo from '../components/logo';

function Header({logIn, setUser, history}) {
    console.log(logIn)
    // let user_id = logIn.user_id; 

    if(logIn){
        return (
            <header>
                <nav>
                    <Link to='/'><Logo /></Link>
                    <div className='nav-div'>
    {/*<Link to='/profile/user_id'>*/}<button className='header-btn' id='user-profile-btn' onClick= {() => history.push(`/profile/${logIn.user_id}`)}>{logIn.username}</button>{/*</Link>*/}

                        <Link to='/'><button className='header-btn' id='logout-btn' onClick= {() => setUser()}>Odjavi se druže</button></Link>
                    </div>
                </nav>
            </header>
        )
    } else {
        return (
            <header id="welcome-header">
                <h1>Prospi čaj, druže!</h1>
                <Link to='/'><Logo /></Link>
            </header>
        )
    }
    
}

export default withRouter (Header);