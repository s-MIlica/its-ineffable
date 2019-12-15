import React from 'react';
import InputForm from '../components/input_form';
import PhoneBook from '../components/phone_book';
import { useState } from 'react';

function Main(props) {
    //let [data, setData] = useState([])

    let {data} = props

    let addPhone = () => {
        console.log('nešto');
    }
    
    return (
        <main>
            <div className="input-form">
                <input type='text' className="name-lastname" placeholder="Name & Surname" value={nameSurname}>{nameSurname}</input>
                <input type="text" className="phonenumber" placeholder="Phone Number" value={phoneNumber}>{phoneNumber}</input>
                <input type="submit" className="submit-btn" value="Add Phone Number" onClick={addPhone}></input> 
            </div>
            <PhoneBook data={data}></PhoneBook>
        </main>
    )
}

export default Main;