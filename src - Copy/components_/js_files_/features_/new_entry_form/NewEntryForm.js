import React, { useState, useEffect } from "react";
import './NewEntryForm_.css';
import EntryInputForm from "./EntryInputForm";

let temp_cnt_ = 11;
let public_array = [];

const NewEntryForm = (props) => {
/////////////////////A Data from Json file ///////////////////// 
let [link_properties, setData]=useState([]);
    const getData = () => {
        //    fetch('user_links.json',
        //        {
        //            headers: {
        //                'Content-Type': 'application/json',
        //                'Accept': 'application/json'
        //            }
        //        }
        //    )
        //        .then((get_response) => {
        //            console.log(get_response)
        //            return get_response.json();
        //        })
        //        .then((render_json) => {
        //            console.log('render_json:');
        //            console.log(render_json);
        //            public_array = [
        //                ...render_json
        //            ];
        //            setData(render_json);
        //            return public_array;
        //        });
        let http_request = new XMLHttpRequest(), json_content = '', json_url = './user_links.json';
        http_request.open('GET', json_url, true);
        http_request.onreadystatechange = (() => {
            if (http_request.readyState === 4 && http_request.status === 200) {
                json_content = JSON.parse(http_request.responseText)
                console.log('?<<<<<<<<<<<<<<<<<<<<<<<< json_content: >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>/');
                console.log(json_content);
                public_array = [
                    ...json_content
                ];
                setData(json_content);
                return public_array;
            }//[if]

        });//[fn]
    }//[getData]
    useEffect(()=>{ getData() },[]);
////////////////////////////////////////////////////////////

    console.log('link_properties: ');
    console.log(link_properties);

    let id_array = [];
    link_properties.map((jsn_data) => {
        id_array.push(jsn_data.key);

        return link_properties;
    }//[fn] 
    );//[usr_jsn]
    let links_length = id_array.length;
    console.log('links_length >>>>>>>>>>>>>>>>>>');
    console.log(links_length);
    //////////////////////////////////////////////////////////////////////////
    // Receives new entry data:
    const saveNewEntryHandler = (new_entry_data) => {

        links_length++;
        temp_cnt_++;
        console.log('#############################################:');
        console.log(links_length);
        const entry_data = {
            key: 'new_link_' + temp_cnt_,
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