import './../../css_files_/features_css_/Link_Item.css';
import EntryDate from './EntryDate.js';
import Card from './../ui_/Card_';
// import React, {useState} from 'react';
import LinkStatus from './LinkStatus';

function LinkItem(props){
    // Builds an entry in Link Coll:
    return(
        <Card className="expence_root">
            <EntryDate ls_date={props.ls_date} />
            <div className='expence_title_'><a href={props.ls_href}>{props.ls_linkname}</a></div>
            <LinkStatus ls_status_={props.ls_status_} />
        </Card>
    );//[return]
};//[fn]
export default LinkItem;