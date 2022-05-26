import React, { useState} from 'react';
import Chart from './../Chart/Chart';

const EntryChart = props => {

    let [link_properties, setData] = useState([]);

    let linksFromJson = [];
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
                linksFromJson = [...data];
                setData(linksFromJson);
            })
    }, [])//[useEffect]

    //console.log('link_properties >>>   ' + JSON.stringify(link_properties));
    //setTimeout(() => {

    const chartDataPoints = [
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

        for (const eachLink in chartDataPoints) {
            const linkMonth = new Date(eachLink).getMonth();
            console.log('linkMonth    --------------- >> ' + linkMonth);
            console.log('chartDataPoints    --------------- >> ' + JSON.stringify(chartDataPoints[linkMonth]));

            chartDataPoints[linkMonth].value = linkMonth + '%';
            console.log('chartDataPoints[linkMonth].value    --------------- >> ' + chartDataPoints[linkMonth].value);

        }  //[for]
    //setData(chartDataPoints);

        return <Chart dataPoints={chartDataPoints} />
    //}, 500);    //[setTimeout]
}  //[EntryChart]

export default EntryChart;