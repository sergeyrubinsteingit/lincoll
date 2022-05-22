import React, { useState } from "react";
import './EntryInputForm_.css';

// This module is to get a new link input from user

const EntryInputForm = (props) => {

    const [user_input, setNewLink] = useState(
    {
        link_date: '',
        link_name: '',
        link_url: '',
    }); //[useState]

    const LinkDataHandler = (event, entry) => {   /*Creates new link entry*/
        setNewLink((prevState) => {
            return ({...prevState, 
                [entry]: event.target.value, 
            });//[return]
        }); //[fn]
    }; //[fn]

    let link_data_set = [];

    const SubmitHandler = (event) => { // Submits the form values.
        event.preventDefault();
        let sel_date = new Date(user_input.link_date).toString();
            if (sel_date.includes('Invalid')) {
                sel_date = new Date().toString();
        }//[if]

        link_data_set = {
            link_date: sel_date,
            link_name: user_input.link_name,
            link_url: user_input.link_url,
            link_status: 'NONE'
        };//[var]
    // Passes new data up to the parent module:
        props.on_SaveNewEntry(link_data_set);
        // Writes new entry in JSON:
        props.on_NewEntrySet(link_data_set);
    //Add_toJson(link_data_set);
    // Clears the values in the [user_input] var:
        setNewLink({
            link_date: '',
            link_name: '',
            link_url: '',
        });
    }; //[fn]

    return (
        <form onSubmit={SubmitHandler}>
            <div className="new-entry-form__controls">
                <div className="new-entry-form_url">
                    <label>Link URL</label><br/>
                    <input type='text'
                    value={user_input.link_url} 
                    onChange={(event)=>LinkDataHandler(event, 'link_url')} />
                </div>
                <div className="new-entry-form_name-and-data">
                    <div className="new-entry-form_link-name">
                        <label>Link Name</label><br/>
                        <input type='text'
                        value={user_input.link_name} 
                        onChange={(event)=>LinkDataHandler(event, 'link_name')} />
                    </div>
                    <div className="new-entry-form_date">
                        <label>Date</label><br/>
                        <input type='date'
                        value={user_input.link_date} min='2021-12-01' max='2023-12-31'
                        onChange={(event)=>LinkDataHandler(event, 'link_date')} />
                    </div>
                        <button type="submit">Add</button>
                </div>             
            </div> 
        </form>
    ); //[return]
}; //[fn]
export default EntryInputForm;