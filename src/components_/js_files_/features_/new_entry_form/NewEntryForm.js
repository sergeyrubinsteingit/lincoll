import './NewEntryForm_.css';
import EntryInputForm from "./EntryInputForm";
import React, { useState } from 'react';
import Request from 'react-http-request';

const NewEntryForm = (props) => {
    console.log(`Max HTTP Header size is ${Request.maxHeaderSize}`);

    var getCookieName = document.cookie;
    //window.alert('Cookie name: ' + getCookieName + '\nCookie length: ' + document.cookie.length);
    console.log('Cookie name: ' + getCookieName + '\nCookie length: ' + document.cookie.length);

    let cookieDict = {};
    document.cookie.split(';').reduce((cookies, cookie) => {
    const [name, value] = cookie.split('=').map(c => c.trim());
    cookieDict = { ...cookies, [name]: value };
    console.log('cookieDict: ' + JSON.stringify(cookieDict));
    return cookieDict;
    }, {});

    //document.cookie.split(";")
    //    .forEach(function (c) {
    //        console.log('document.cookie = >> ' + document.cookie);
    //        document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    //    });

    localStorage.setItem('myCat', 'Tom');
    console.log(localStorage.getItem('myCat'));
    var obj = { a: 1, b: 2 };
    localStorage.setItem('./user_links.json', JSON.stringify(obj));
    console.log(localStorage.getItem('./user_links.json'));
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
    const pathToJson = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + '/user_links.json';
    function writeNewEntryToJson(newJsonEntry) {
        fetch(pathToJson,
            {
                method: 'get',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json'
                }
            }/*headers*/
        )   /*fetch*/
                .then((res) => res.json()   )   /*then*/
            .then((res2) => {
                //    '====================================\n' +
                //    'protocol: ' + window.location.protocol + '\n' +
                //    'hostname: ' + window.location.hostname + '\n' +
                //    'host: ' + window.location.host + '\n' +
                //    'port: ' + window.location.port + '\n' +
                //    '===================================='
                //);

                fetch(  pathToJson, {
                    method: 'post',
                    body: JSON.stringify([...res2, newJsonEntry], null, 2),
                    mode: 'no-cors', // no-cors, cors, *same-origin
                    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                    //cache: "no-store",
                    credentials: 'same-origin',
                        headers: {
                            // 'Accept': 'application/json',
                            'Host': window.location.host,
                            //'Proxy-Connection' : 'keep-alive',
                            //'Keep-Alive' : 'timeout=25, max=1000',
                            'Content-Length': '160000',
                            'Content-Type': 'application/json'
                        },  /*Headers*/
                    redirect: 'follow',
                    referrerPolicy: 'no-referrer'
                })
                    .then(async getResponse => {
                        if (getResponse.status === 404) {
                            console.log('Target not found');
                            return false;
                        }
                            const isJson = getResponse.headers.get('content-type')?.includes('application/json');
                            const responseData = isJson && await getResponse.json();

                            // check for error response
                            if (!getResponse.ok) {
                                // get error message from body or default to response status
                                const errorMsg = (responseData && responseData.message) || getResponse.status;
                                console.error('\n###################\nRESPONCE FAILED\n', 'Error code: '+errorMsg, '\n###################\n');
                                throw new Error(`The HTTP status of the reponse:\n ${getResponse.status} (${getResponse.statusText})`);
                            }
                        })   /*then*/
                                .catch(error => {
                                    console.error('\n######################################\nERROR!\n', error, '\n######################################\n');
                                    return false;
                                });        /*catch*/
                });        /*then*/
            
    } //[writeNewEntryToJson]

    // A hook for switching elements' visibility:
    let [linkFormField, showLinkForm] = useState(false);
    // Add link field elements handler:
    const addLinksFieldHandler = () => {
        setTimeout ( () => {
            linkFormField === false ? linkFormField = true : linkFormField = false;
            showLinkForm(linkFormField);
            console.log('<<<<<<<<<<    addLinksFieldHandler    >>>>>>>>>>>>>\n' + linkFormField);
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