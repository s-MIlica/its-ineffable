import React from 'react';
import PhoneNumber from './phone_number';

function PhoneBook(props) {

    let {data} = props
    return (
        <div className="phone-book">
            {data.map(x => {return <PhoneNumber data={x} key={data.phoneNumber}/>})}
        </div>
    )
}

export default PhoneBook;