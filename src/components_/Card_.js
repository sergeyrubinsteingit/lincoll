import './css_files_/Card_.css';

function Card(App_props_){
    const classes_set = 'card_ ' + App_props_.className;
    return (
        <div className={classes_set}>{App_props_.children}</div>
    ); //[return]
} // [fn]
export default Card;