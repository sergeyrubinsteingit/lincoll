import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import './components_/css_files_/App_.css';
import LinkEntries from './components_/js_files_/features_/LinkEntries';
import NewEntryForm from './components_/js_files_/features_/new_entry_form/NewEntryForm';
// TEMP /////////////////////////////////////////////////
//const DUMMY_LINKS =
//    [
//        {
//            "link_date": "2012-04-23T00:00:00.000Z",
//            "item_name": "FROM APP",
//            "link_to_item": "https://www.dialog.co.il/high-tech/searchresults/?fieldId=&professions=23565,93909,93911,23662&regions=1,2&skills=&salary=10000,15000&industry=&companySize=0&nearTrain=false",
//            "lnk_status": "NONE",
//        },
//    ];

const App = (props) => {
    let linksFromJson = [];
    ////////////////////////////////////////////////////////////////////////////////
    //// brings in data from json where user info is stored:
    let [link_properties, setData] = useState([]);

    React.useEffect(() => {
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
                //setTimeout(() => {
                    setData(linksFromJson);
                //}, 5000);//[setTimeout]
                console.log('------------------------------------------linksFromJson -----------------------------------');
                console.log(data);
            })
    }, [])//[useEffect]

    console.log(':::::::::::::::::    linksFromJson     :::::::::::::::::');
    console.log(linksFromJson);

    const addLinkHandler = add_link => {
        setData((prevLinks_) => {
            return [add_link, ...prevLinks_]
        });//[updateLinks]

        console.log('--- In App.js:  add_link  ---');
        console.log(add_link);
        console.log('--- In App.js: link_properties   ---');
        console.log(link_properties);
    }//[addLinkHandler]

    return React.createElement('div', { className: App }, /*Wrapper div*/
            React.createElement('h1', {}, 'Links Collector'), /* The Header */
            React.createElement(NewEntryForm, { on_AddLink: addLinkHandler }), /* A component holding input forms */
            React.createElement(LinkEntries, { items_: link_properties }), /* A component populating entries */
        );// [ React.createElement: Wrapper div ]

} //[App]                                           

export default App;

// The code below is correct; it is a modern version of the same solution as one above.
// As an exercise I'm using here the former approach (above);
// Still lets the code below be kept. The code is:

//   return (
//     <>
//     <div className="App">
//       <h1>Links Collector</h1>
//       <LinkEntries  />
//     </div>
//     </>
//   );//[return]
// } //[fn]
