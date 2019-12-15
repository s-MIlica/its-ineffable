import React from 'react';

const PhoneNumber = (props) => {
    let {phoneInfo} = props;

    let {nameSurname, phoneNumber} = phoneInfo;

    return (
        <div className="one-number">
            <label className="user-name" nameSurname={nameSurname}>{nameSurname}</label>
            <label className="user-phone">{phoneNumber}</label>
        </div>
    )
}

export default PhoneNumber;