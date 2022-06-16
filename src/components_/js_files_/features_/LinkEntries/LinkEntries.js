import React, { useState } from 'react';
import LinkItem from './LinkItem';
import './../../../css_files_/App_.css';
import LinksFilter from './../filter_/LinksFilter';
import './../../../../App';

let oper_array = [];
let oper_array_2 = [];

// This module collects all the link entries and arrages them on call from NewEntryForm.js

function LinkEntries(props) {

    const [selected_year, SelectYear] = useState('All years');//[hook]
 
    oper_array = props.items_; /*Creates an operative array*/

    const SetFilterByYear = (sel_year) => {  /* Displays link selection by years*/

        try {

            if (props.items_ !== null || props.items_ !== ' ') {
                oper_array_2.push(props.items_); /*Pushes all the items in process to array */
            };

            oper_array_2 = oper_array_2.flat(3); /*Extracts nested styles*/
            oper_array_2 = [...new Set(oper_array_2)];    /*Removes duplicates*/

            if (sel_year === 'All years') { /* Populates full array*/
                oper_array = [];
                oper_array = [...oper_array_2];

                props.on_ChangeArray(oper_array);  /* Passes changes on to [App.js] */
            } else {/* Populates an array with selected entries*/
                oper_array = [];
                for (let i = 0; i < oper_array_2.length; i++) {
                    if (oper_array_2[i].link_date.includes(sel_year)) {
                        oper_array.push(oper_array_2[i]);
                    }///[if]
                }///[for]
                props.on_ChangeArray(oper_array);  /* Passes changes on to [App.js] */
            }//[if else 1]

            console.log('!!!!!!!!!!      checking the array by mapping it     !!!!!!!!!!');
            oper_array.map(pr_ => console.log(pr_));
            console.log('******** solution 1 ********');
            console.log('******** oper_array ********');
            console.log(oper_array);
        } catch (e) {
            console.log(e);
        };//[try]
        SelectYear(sel_year);  /*Sets hook*/
        return oper_array;
    };//[fn]

    // Settings for LinkItem content - conditional:
    let openArrayContent = <center><p style={{ fontSize: '2em', color: 'darkred' }}>No links for selected date</p></center>; /* In case there is no link entries for selected year*/
    if (oper_array.length > 0) {    /*If there are some entries for selected year*/
        openArrayContent = oper_array.map(new_entry =>
            <LinkItem  /*Mapping LinkItem properties*/
                key={new_entry.key}
                link_date={new_entry.link_date}
                link_name={new_entry.link_name}
                link_url={new_entry.link_url}
                link_status={new_entry.link_status}
                onDelete={props.onDeleteItem}
            />      /*LinkItem*/    )  //[map]
    }; //[if]

    return (
        <div className='links_display_field' >
            <LinksFilter selected_yr={selected_year} on_GetSelectedYear={SetFilterByYear} />
            <div className='link_entries' /*Contains all link elements*/>
                {openArrayContent}
            </div>
        </div>
    ); // [return]  
} // [fn]

export default LinkEntries;
  ////////////////////////////////////////////////////////
    // const do_filter = oper_array.filter(filtered_);
    // function filtered_ ( marker_ ) {
    //   if(marker_.link_date.includes(sel_year)){
    //     console.log('******** solution 2 ********');
    //     console.log(marker_);
    //   };//[if]
    // };//[fn] 

        //const filteredArr = Object.values(oper_array).filter(linkEntry => {
        //    return linkEntry.getFullYear().toString() === selected_year;
        //});