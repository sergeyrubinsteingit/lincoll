import './../../css_files_/features_css_/Link_Item.css';
import EntryDate from './EntryDate.js';
import Card from '../ui_/Card_';
import LinkStatus from './LinkStatus';

function LinkItem(props) {
    
    // Builds an entry in Link Coll:
    return(
        <Card className="link_item_root">
            <EntryDate link_date={new Date(props.link_date)} />
            {/* <EntryDate link_date={props.link_date} /> */}
            {/* <EntryDate link_month={props.get_month_name } link_day={ props.get_day } link_weekday={ props.get_weekday } link_year={ props.get_year } /> */}
            <div className='link_item_title'><a href={props.link_url} target="_blank" rel="noopener noreferrer">{props.link_name}</a></div>
            <LinkStatus link_status={props.link_status} />
        </Card>
    );//[return]
};//[fn]
export default LinkItem;

