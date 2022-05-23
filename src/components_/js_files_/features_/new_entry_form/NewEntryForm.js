import './NewEntryForm_.css';
import EntryInputForm from "./EntryInputForm";
import { useState } from 'react';

const NewEntryForm = (props) => {

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
        return entryDataSet;
    };//[saveNewEntryHandler]

    // Writes to JSON:
    const writeNewEntryToJson = () => {
        console.log('>>>>>>>>>>>>>> from writeNewEntryToJson <<<<<<<<<<<<<<<<<</');
        fetch('user_links.json',
            {
                method: 'POST'
                , headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }   /*headers*/
            }
        )   /*[fetch]*/
            .then(resp => {
                resp.json();
                resp = JSON.parse(resp);
            }
        )
            .then(jsonData => {
                let updateArray = [...jsonData, entryDataSet];
                console.log('//// from writeNewEntryToJson ////');
                console.log(updateArray);
                JSON.stringify(updateArray);
            }) /*then*/
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
                on_NewEntrySet={writeNewEntryToJson}
                on_addLinksDone={addLinksFieldHandler} />}
        </div>
    );//[return]
};//[fn]
export default NewEntryForm;