import './../../css_files_/ui_css_/Card_.css';

function Card(props){
    const classes_set = 'card_ ' + props.className;
    return (
        <div className={classes_set}>{props.children}</div>
    ); //[return]
} // [fn]
export default Card;