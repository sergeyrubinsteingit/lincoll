import React, { useState, useEffect } from "react";
import './NewEntryForm_.css';
import EntryInputForm from "./EntryInputForm";

const NewEntryForm = (props) => {
    let id_array = [];
    let links_length = id_array.length;
    console.log('YYYYYYYYYYYY   links_length   YYYYYYYYYYY:');
    console.log(links_length);
    //////////////////////////////////////////////////////////////////////////
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
    const saveNewEntryHandler = new_entry_data => {

        const entry_data = {
            key: randomString(20),
            ...new_entry_data,
        } //[fn]
        props.on_AddLink(entry_data);
    };//[fn]

    return (
        <div className="new-entry-form">
            <EntryInputForm on_SaveNewEntry={saveNewEntryHandler} />
        </div>
    );//[return]
};//[fn]
export default NewEntryForm;