import React, { useState, useEffect } from 'react';
import LinkItem from './LinkItem';
import './../../css_files_/App_.css';
import LinksFilter from './filter_/LinksFilter';
import './../../../App';
let oper_array = [];
let oper_array_2 = [];

function LinkEntries(props) {
    // Selected year from [LinksFilter] module:
    const [selected_year, SelectYear] = useState('All years');//[hook]
    
    const SetFilterByYear = (sel_year) => {

        try {

            // Creates an operative array
            oper_array = props.items_;
            console.log('~~~~~~~ oper_array ~~~~~~~');
            console.log(oper_array);

            if (props.items_ !== null || props.items_ !== ' ') {
                oper_array_2.push(props.items_);
            };

            oper_array_2 = oper_array_2.flat(3);
            oper_array_2 = [...new Set(oper_array_2)];

            console.log('%%%%%%%%%%%%  sel_year  %%%%%%%%%%%%');
            console.log(sel_year);

            console.log('%%%%%%%%%%%%  oper_array_2  %%%%%%%%%%%%');
            console.log(oper_array_2);

            if (sel_year === 'All years') {
                oper_array = [];
                oper_array = [...oper_array_2];

                console.log('!!!!!!!!!!  All years === oper_array !!!!!!!!!!');
                console.log(oper_array);

            } else {
                oper_array = [];
                for (let i = 0; i < oper_array_2.length; i++) {
                    if (oper_array_2[i].link_date.includes(sel_year)) {
                        oper_array.push(oper_array_2[i]);

                        console.log(')$$$$$$$$$$$$$   FOR ' + sel_year + ' === oper_array   $$$$$$$$$$$$$(');
                        console.log(oper_array);
                    }/////////////////
                }////////////////
                console.log('))))))))))))))))))))))  YEAR ' + sel_year + ' === oper_array ((((((((((((((((((((((((((');
                console.log(oper_array);
            }//[if else 1]

            console.log('!!!!!!!!!!      checking the array by mapping it     !!!!!!!!!!');
            oper_array.map(pr_ => console.log(pr_));
            console.log('******** solution 1 ********');
            console.log('******** oper_array ********');
            console.log(oper_array);

        } catch (e) {
            console.log(e);
        };//[try]
        SelectYear(sel_year);
    };//[fn]

    return (
        <div>
            <LinksFilter selected_yr={selected_year} on_GetSelectedYear={SetFilterByYear} />
            <div className='link_entries' /*Contains all link elements*/>
                {
                    oper_array.map(new_entry => <LinkItem  /*Mapping LinkItem properties*/
                        key={new_entry.key}
                        link_date={new_entry.link_date}
                        link_name={new_entry.link_name}
                        link_url={new_entry.link_url}
                        link_status={new_entry.link_status} />)
                }
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

    //const SetFilterByYear = (sel_year) => {
    //    SelectYear(sel_year);
    //    oper_array.push(props.items_);
    //    oper_array = props.items_.filter(linkEntry => {
    //        setTimeout(() => {
    //            return linkEntry.link_date.getFullYear().toString() === selected_year;
    //        }, 10000);
    //    });
    //}