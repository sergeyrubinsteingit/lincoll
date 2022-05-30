import React, { useState} from 'react';
import Chart from './../Chart/Chart';

const EntryChart = props => {
    let [link_properties, setData] = useState([props]);
    React.useEffect(() => {     /* Brings in data from json where user info is stored:*/
        fetch('./user_links.json',
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }/*headers*/)
            .then((res) => res.json())
            .then((data) => {
                let linksFromJson = [...data];
                setData(linksFromJson);
            })
    }, [])//[useEffect]

    let chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ]; //[chartDataPoint]

    let linkMonth = '';
        for (const eachLink in chartDataPoints) {
            linkMonth = new Date(eachLink).getMonth();
            const randomVal = Math.floor(Math.random() * chartDataPoints.length);
            chartDataPoints[linkMonth].value += randomVal;  // Just for a demo sake.
    }  //[for]
        return <Chart dataPoints={chartDataPoints} />

}  //[EntryChart]

export default EntryChart;