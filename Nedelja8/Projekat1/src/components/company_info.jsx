import React, { useState, useEffect } from 'react';
import { getCompanyInfo } from '../utilities/space-x-service';

function CompanyInfo() {

    const [data, setData] = useState([]);

    useEffect(() => {
        getCompanyInfo().then(data => {
            setData(data);
        });

    }, []);

    let companyName = data.name;
    let founded = data.founded;
    let founder = data.founder;
    let ceo = data.ceo;

    return (
        <div id="header-div">
        <h1>{companyName}</h1>
        <h2>{founded}</h2>
        <h5>Founder: {founder}</h5>
        <h5>Ceo: {ceo}</h5>
        </div>
    )
}

export default CompanyInfo;