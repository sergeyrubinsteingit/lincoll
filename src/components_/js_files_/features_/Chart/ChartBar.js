import React from 'react';
import './ChartBar.css';

let barFillDegree = '10%';
const ChartBar = props => {
    if (props.maximumValue > 0) {
        barFillDegree = Math.round((props.chartDataPoints.value / props.maximumValue) * 100) + '%';
        console.log('props.value -->  ' + props.chartDataPoints.value);
        }   //[if]

        return <div className='chart-bar' >
            <div className='chart-bar__inner' >
                <div className='chart-bar__fill' style={{ height: barFillDegree }} ></div>
            </div>
            <div className='chart-bar__label' > {props.label} </div>
    </div>
    }    //[ChartBar]


    export default ChartBar;