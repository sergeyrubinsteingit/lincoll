import React from "react";
import './../../../css_files_/features_css_/Link_Item.css';

const DeleteLink = props => {
    const deleteHandler = props => {
        console.log('props obj:', props);
        console.log('props.key :', props.key);
        props.onDelete(props.key);
    };  //[deleteHandler]

    //console.log('current_status_ = ' + current_status_);
    return (
        <div className='delete_link' onClick={deleteHandler} >DEL.</div>
    );// [Return]
};//[fn]
export default DeleteLink