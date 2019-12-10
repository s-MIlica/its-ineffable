import React, { useState, useEffect } from 'react';
import LaunchList from './launch-list';
import { DataYearFilter} from './data-year.filter';
import { getPastLaunches } from '../utilities/space-x-service';


const PastLList = (props) => {

    const [data, setData] = useState([])
    const [displayData, setDisplayData] = useState(data);

    useEffect(() => {
        getPastLaunches().then(data => {
            setData(data);
            setDisplayData(data);
          });
        
    }, []);

    const handleChange = (e) => {
        setDisplayData(data.filter(x => { return x.launch_year === e.target.value}));
    }

    return (
        <div>
        <DataYearFilter handleChange={handleChange} />
        <LaunchList data={displayData}/>
        </div>
    );
}

export default PastLList;