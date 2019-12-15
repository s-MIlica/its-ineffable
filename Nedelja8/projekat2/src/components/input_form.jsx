import React from 'react';

function InputForm (props) {
    //const {inputData} = props;

    let {nameSurname, phoneNumber, addPhone} = props;

    return (
        <div className="input-form">
            <input type='text' className="name-lastname" placeholder="Name & Surname" value={nameSurname}>{nameSurname}</input>
            <input type="text" className="phonenumber" placeholder="Phone Number" value={phoneNumber}>{phoneNumber}</input>
            <input type="submit" className="submit-btn" value="Add Phone Number" onClick={addPhone}></input> 
        </div>
    )
}

export default InputForm;