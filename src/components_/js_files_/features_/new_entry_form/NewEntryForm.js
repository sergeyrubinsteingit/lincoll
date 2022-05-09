import React, { useState, useEffect } from "react";
import './NewEntryForm_.css';
import EntryInputForm from "./EntryInputForm";

let temp_cnt_ = 11;

const NewEntryForm = (new_entry_prop) => {
    let id_array = [];
    let links_length = id_array.length;
    console.log('YYYYYYYYYYYY   links_length   YYYYYYYYYYY:');
    console.log(links_length);
    //////////////////////////////////////////////////////////////////////////
    // Receives new entry data:
    const saveNewEntryHandler = (new_entry_data) => {

        links_length++;
        temp_cnt_++;
        console.log('########     links_length   ########:');
        console.log(links_length);
        const entry_data = {
            key: 'new_link_' + temp_cnt_,
            ...new_entry_data,
        } //[fn]
        new_entry_prop.on_AddLink(entry_data);
    };//[fn]

    return (
        <div className="new-entry-form">
            <EntryInputForm on_SaveNewEntry={saveNewEntryHandler} />
        </div>
    );//[return]
};//[fn]
export default NewEntryForm;