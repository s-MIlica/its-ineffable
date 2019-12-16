import React from 'react';
import PhoneNumber from './phone_number';

const PhoneBook = (props) => {
    let {data} = props
    return (
        <div>
            {data.map(x => {return <PhoneNumber data={x} key={x.phoneNumber}/>})}
        </div>
    )
}

export default PhoneBook;