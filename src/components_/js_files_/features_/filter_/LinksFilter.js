import React from 'react';
import './LinksFilter.css';

const LinksFilter = (filt_props) => {
    // Getting user selection and passing it up to parent:    
    const SelectedYearHandler = (event) => {
        console.log('Here\'s a CHILD component. Selected ' + event.target.value);
        filt_props.on_GetSelectedYear(event.target.value);
        // filt_props.on_GetSelectedYear('user selected year is: ' + event.target.value);
    };//[GetSelectedYear]

    return (
    <div className='links_filter'>
        <div className='links_filter_controls'>
        <label>Filter by year</label>
        <select value={filt_props.selected_yr} onChange={SelectedYearHandler}>
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
            <option value='2019'>2019</option>
            <option value='All years'>All years</option>
        </select>
        </div>
    </div>
    );
};

export default LinksFilter;