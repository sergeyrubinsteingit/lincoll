import React from "react";
import './NewEntryForm_.css';
import EntryInputForm from "./EntryInputForm";

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
    const saveNewEntryHandler = newEntryDataSet => {
        const entryDataSet = {
            key: randomString(20),
            ...newEntryDataSet,
        } //[fn]
        props.on_AddLink(entryDataSet);
    };//[saveNewEntryHandler]

    return (
        <div className="new-entry-form">
            <EntryInputForm on_SaveNewEntry={saveNewEntryHandler} />
        </div>
    );//[return]
};//[fn]
export default NewEntryForm;