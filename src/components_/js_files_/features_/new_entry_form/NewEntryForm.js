import './NewEntryForm_.css';
import EntryInputForm from "./EntryInputForm";
import React, { useState, useEffect } from 'react';
//import axios from "axios";
//import jsonFileData from './../../../../user_links.json'
//import fs from 'fs';


const NewEntryForm = (props) => {

    //{     // Bringing Json data using [import]
    //    jsonFileData && jsonFileData.map(jsonEntry => {
    //        console.log('jsonEntry >>==>> ' + jsonEntry.link_date);
    //        console.log('jsonFileData >>==>> ' + JSON.stringify(jsonFileData));
    //    });
    //}

    //Creates random string:
    const allCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-`;:!@#$%^&*?~[]{}<>_+=|"()';
    const randomString =  setLength  => {
        let randString = '';
        for (let aa = 0; aa < setLength; aa++) {
            randString += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
        }
        return randString;
    };

    // Receives new entry data:
    let entryDataSet = [];

    const saveNewEntryHandler = newEntryDataSet => {
        entryDataSet = {
            key: randomString(20),
            ...newEntryDataSet,
        } //[fn]
        console.log('================ entryDataSet ==============');
        console.log(entryDataSet);
       
        props.on_AddLink(entryDataSet);
        return writeNewEntryToJson(entryDataSet);
    };//[saveNewEntryHandler]

    // Writes to JSON:
    function writeNewEntryToJson(newJsonEntry) {
        //event.preventDefault();

        fetch('./user_links.json',
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }/*headers*/)
            .then((res) => res.json())
            .then((res2) => {

                setTimeout(() => {
                            const dataToSend = {
                                method: 'POST',
                                mode: 'no-cors', // no-cors, cors, *same-origin
                                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                                credentials: 'omit',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify([...res2, newJsonEntry]),
                    };
                    //console.log('=========== * [...res2, newJsonEntry] * =========\n' + JSON.stringify([...res2, newJsonEntry]))
                    fetch('./user_links.json', dataToSend)
                                .then(async response => {
                                    const isJson = response.headers.get('content-type')?.includes('application/json');
                                    const data = isJson && await response.json();

                                    // check for error response
                                    if (!response.ok) {
                                        // get error message from body or default to response status
                                        const errorMsg = (data && data.message) || response.status;
                                        console.error('\n###################\nRESPONCE FAILED\n', errorMsg, '\n###################\n');
                                        //return Promise.reject(error);
                                    }
                                })
                                .catch(error => {
                                    console.error('\n###################\nThere was an error!\n', error, '\n###################\n');
                                });
                 }, 500);
            });
    } //[writeNewEntryToJson]

    // A hook for switching elements' visibility:
    let [linkFormField, showLinkForm] = useState(false);
    // Add link field elements handler:
    const addLinksFieldHandler = () => {
        setTimeout ( () => {
            linkFormField === false ? linkFormField = true : linkFormField = false;
            showLinkForm(linkFormField);
            console.log('<<<<<<<<<<    addLinksFieldHandler    >>>>>>>>>>>>>');
            console.log(linkFormField);
        }, 150);  //[setTimeout]
    }  //[addLinksFieldHandler]

    return (
        <div className="new-entry-form">
            {!linkFormField && <button className="add_link_button"  onClick={addLinksFieldHandler}>Add new link</button> }
            {linkFormField && <EntryInputForm on_SaveNewEntry={saveNewEntryHandler}
                //on_NewEntrySet={writeNewEntryToJson}
                on_addLinksDone={addLinksFieldHandler} />}
        </div>
        );//[return]

};//[NewEntryForm]
export default NewEntryForm;