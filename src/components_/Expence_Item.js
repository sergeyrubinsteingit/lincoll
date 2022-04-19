import './css_files_/Expence_Item.css';
import EntryDate from './EntryDate.js';
import Card from './Card_';

function ExpenceItem(App_props_){
    // Builds an entry in Link Coll:
    return(
        <Card className="expence_root">
            <EntryDate ls_date={App_props_.ls_date} />
            <div className='expence_title_'><a href={App_props_.ls_href}>{App_props_.ls_linkname}</a></div>
            <div className='expence_price_'>{App_props_.ls_price}</div>
        </Card>
    );//[return]
}//[fn]

export default ExpenceItem;