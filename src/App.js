import React, { useState } from 'react';
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
    let [link_properties, setData] = useState([]);

    React.useEffect(() => {     /* Brings in data from json where user info is stored:*/
        let linksFromJson = [];
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

    const addLinkHandler = add_link => {/* Adds new link entry to list of the links*/
        setData((prevLinks_) => {
            return [add_link, ...prevLinks_]
        });//[updateLinks]
    }//[addLinkHandler]

    const arrayHandler = newArray => {  /*Provides display of selected links on change in LinkEntries.js*/
        setData(() => {
            return [...newArray]
        });
    }//[arrayHandler]

    return React.createElement('div', { className: 'app_wrapper_div' }, /*Wrapper div*/
        React.createElement('h1', {}, 'Links Collector'), /* The Header */
        React.createElement(NewEntryForm, { on_AddLink: addLinkHandler }), /* A component holding input forms */
        React.createElement(LinkEntries, { items_: link_properties, on_ChangeArray: arrayHandler }), /* A component populating entries */
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