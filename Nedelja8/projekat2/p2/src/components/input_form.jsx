import React from 'react';
import { useState } from 'react';

const InputForm = (props) => {
    let [name_surname, setName_surname] = useState('');
    let [phone, setPhone] = useState('');

    let [search, setSearch] = useState('');
    // let [warning, setWarning] = useState('');
    // let warningTxt = setWarning

    const handleChange = () => {
        props.addPhone(name_surname, phone)
        setName_surname('')
        setPhone('')
    }
    
    return (
        <div>
            <input type="text" placeholder="Name and Surname" defaultValue={name_surname} required onInput={e => {
                setName_surname(e.target.value)

            }}/>
            <input type="text" placeholder="Phone NUmber" defaultValue={phone} required onInput={e => {
                setPhone(e.target.value)

            }}/>
            <input type="submit" value="Add Phone NUmber" onClick={handleChange} />
            <hr />
            <input type="text" placeholder="Search" defaultValue={search} onInput={e => {
                setSearch(e.target.value)
            }}/>
            {/* <label value={warningTxt}></label> */}
        </div>
    )
}

export default InputForm;