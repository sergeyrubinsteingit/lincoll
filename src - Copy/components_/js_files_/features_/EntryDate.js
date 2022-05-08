import './../../css_files_/features_css_/Link_Item.css';
import './../../css_files_/features_css_/EntryDate.css';

function EntryDate(props){
    // Variables setting:
    const get_month_name = props.link_date.toLocaleString('en-US', { month: 'short'});
    const get_day = props.link_date.toLocaleString('en-us', { day: 'numeric' });
    const get_weekday = props.link_date.toLocaleString('en-us', { weekday: 'short' });
    const get_year = props.link_date.toLocaleString('en-us', { year: 'numeric' });

    return(
        <div className='link_entry_date'>
            <div className='month_and_day_'>
            <div>{get_month_name} {get_day}<br/>{get_weekday}<br/>{get_year}</div>
            </div>
        </div>
    ); //[return]
}//[fn]

export default EntryDate;

   //  Example: let date_display = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    // const get_month_name = props.get_month_name;
    // const get_day = props.get_day;
    // const get_weekday = props.get_weekday;
    // const get_year = props.get_year;

    // const get_month_name = props.get_month_name.toLocaleString('en-US', { month: 'short'});
    // const get_day = props.get_day.toLocaleString('en-us', { day: 'numeric' });
    // const get_weekday = props.get_weekday.toLocaleString('en-us', { weekday: 'short' });
    // const get_year = props.get_year.toLocaleString('en-us', { year: 'numeric' });