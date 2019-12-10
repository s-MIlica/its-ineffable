import React, { useState, useEffect }  from 'react';
import { DataCurrentYearFilter } from './data-year.filter';
import LaunchList from './launch-list';
import { getUpcomingLaunches } from '../utilities/space-x-service';


const UpcomingLLaunches = (props) => {

    const [data, setData] = useState([])
    const [displayData, setDisplayData] = useState(data)

    useEffect(() => {
        getUpcomingLaunches().then(data => {
            setData(data);
            setDisplayData(data);
          });
        
    }, []);

    const handleChange = (e) => {
        setDisplayData(data.filter(x => { return x.launch_year === e.target.value}));
    }

    return (
        <div>
            <DataCurrentYearFilter handleChange={handleChange}></DataCurrentYearFilter>
            <LaunchList data={displayData}></LaunchList>
        </div>
    )
}

export default UpcomingLLaunches