import './../../css_files_/features_css_/Link_Item.css';
import EntryDate from './EntryDate.js';
import Card from './../ui_/Card_';
// import React, {useState} from 'react';
import LinkStatus from './LinkStatus';

function LinkItem(App_props_){
    // Builds an entry in Link Coll:
    return(
        <Card className="expence_root">
            <EntryDate ls_date={App_props_.ls_date} />
            <div className='expence_title_'><a href={App_props_.ls_href}>{App_props_.ls_linkname}</a></div>
            <LinkStatus ls_status_={App_props_.ls_status_} />
        </Card>
    );//[return]
};//[fn]
export default LinkItem;