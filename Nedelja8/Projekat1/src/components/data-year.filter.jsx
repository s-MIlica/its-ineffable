import React from 'react';
import { fillYearsToArray, fillUpcomingYearsToArray } from '../utilities/date-utility';

const DataYearFilter = (props) => {

    let {handleChange} = props;

    let years = fillYearsToArray();

    return (
        <select className="year-filter" onChange={handleChange}>
            {years.map(x => <option value={x}> {x} </option>)}
        </select>
    )
}

const DataCurrentYearFilter = (props) => {
    let {handleChange} = props;

    let years = fillUpcomingYearsToArray();

    return (
        <select className="year-filter" onChange={handleChange}>
            {years.map(x => <option value={x}> {x} </option>)}
        </select>
    )
}

export {
    DataYearFilter,
    DataCurrentYearFilter
}