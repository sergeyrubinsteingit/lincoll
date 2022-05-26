import React from "react";
import { useState } from "react";
import './../../../css_files_/features_css_/Link_Item.css';

let current_status_ = 'NO';
function LinkStatus(props){
    const [lnk_status_, setStatus_] = useState(props.link_status);
    const StatusHandler = () => {
        if(current_status_ === 'NO'){
            current_status_ = 'YES';
        } else {
            current_status_ = 'NO';
        } //[if]
        setStatus_(current_status_);
        return current_status_;
    } ;//[fn]
    //console.log('current_status_ = ' + current_status_);
    return(
        <div className='link_status_' onClick={StatusHandler}>{lnk_status_}</div>
    );// [Return]
};//[fn]
export default LinkStatus