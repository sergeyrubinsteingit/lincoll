import React from 'react';
import './ChartBar.css';

let barFillDegree = '0%';
const ChartBar = props => {
    if (Object.values(props)[1] > 0) {
        barFillDegree = Math.round((Object.values(props)[0] / Object.values(props)[1]) * 100) + '%' ;
        }   //[if]

        return <div className='chart-bar' >
            <div className='chart-bar__inner' >
                <div className='chart-bar__fill' style={{ height: barFillDegree }} ></div>
            </div>
            <div className='chart-bar__label' > {props.label} </div>
    </div>
    }    //[ChartBar]


    export default ChartBar;