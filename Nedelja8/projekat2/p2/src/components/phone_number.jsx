import React from 'react';

const PhoneNumber = (props) => {
    let {data} = props

    let {nameSurname, phoneNumber} = data
    return (
        <div>
            <label>{nameSurname}</label>
            <label>{phoneNumber}</label>
        </div>
    )
}

export default PhoneNumber;