import './../../css_files_/features_css_/Link_Item.css';
import EntryDate from './EntryDate.js';
import Card from '../ui_/Card_';
import LinkStatus from './LinkStatus';

function LinkItem(App_props_){
    // Builds an entry in Link Coll:
    return(
        <Card className="link_item_root">
            <EntryDate link_date={new Date(App_props_.link_date)} />
            {/* <EntryDate link_date={App_props_.link_date} /> */}
            {/* <EntryDate link_month={App_props_.get_month_name } link_day={ App_props_.get_day } link_weekday={ App_props_.get_weekday } link_year={ App_props_.get_year } /> */}
            <div className='link_item_title'><a href={App_props_.link_url} target="_blank" rel="noopener noreferrer">{App_props_.link_name}</a></div>
            <LinkStatus link_status={App_props_.link_status} />
        </Card>
    );//[return]
};//[fn]
export default LinkItem;

