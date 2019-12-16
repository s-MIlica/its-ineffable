import React from 'react';
import InputForm from '../components/input_form';
import PhoneBook from '../components/phone_book';
import { useState } from 'react';


const Main = (props) => {
    const [data, setData] = useState(props.data)
    const addPhone = (name, phone) => {
        let tmp = [...data];
        console.log(tmp);
        tmp.push({nameSurname: name, phoneNumber: phone})
        setData(tmp);

        props.data.push(tmp)
    }

    return (
    <div>
        <InputForm addPhone={addPhone}/>
        <PhoneBook data={data} />
    </div>
    )
}

export default Main;