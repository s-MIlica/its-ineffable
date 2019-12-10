import React, { useEffect, useState } from 'react';
import { getRoadsterInfo } from '../utilities/space-x-service';

function RoadsterInfro () {
    const [data, setData] = useState([]);

    useEffect(() => {
        getRoadsterInfo().then(data => {
            setData(data)
        })
    
    }, []);

    let name = data.name;
    let orbitType = data.orbit_type;
    let details = data.details;

    return (
        <div id="footer">
        <label>{name}</label>
        <br></br>
        <label>Orbit Type</label>
        <br></br>
        <label>{orbitType}</label>
        <br></br>
        <label>Details:</label>
        <p>{details}</p>
        </div>
    )

}

export default RoadsterInfro