import React from 'react';
import getSerbianDate from '../utilities/date-utility';

//Has atribute launch, which has info about launch
const Launch = (props) => {
    let {launch} = props;
    let {mission_name: m_name, //dodeljivanje alijasa 
        launch_year: l_year, 
        launch_date_utc: l_date, 
        rocket: {rocket_name: r_name},
        links: {mission_patch_small: m_patch}
        } = launch;

        let date = new Date(l_date * 1000); //izvlačimo vreme iz milisekundi i šaljemo u date-utility funkciju

    return (
        <launch>
            <label id="m_name"> {m_name} </label>
            <img src={m_patch === null ? 'https://www.mercurynews.com/wp-content/uploads/2019/03/SJM-L-MUSKPOT-0308.jpg?w=490':m_patch} className="mission_logo"/>
            <label id="date"> {getSerbianDate(date)} </label>
            <label id="r_name"> {r_name} </label>
        </launch>
    );
}

export default Launch