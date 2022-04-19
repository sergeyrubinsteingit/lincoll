import './../../css_files_/features_css_/Link_Item.css';
import './../../css_files_/features_css_/EntryDate.css';

function EntryDate(App_props_){
    // Variables setting
    //  Example: let date_display = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    // const get_month_name = App_props_.get_month_name;
    // const get_day = App_props_.get_day;
    // const get_weekday = App_props_.get_weekday;
    // const get_year = App_props_.get_year;


    // const get_month_name = App_props_.get_month_name.toLocaleString('en-US', { month: 'short'});
    // const get_day = App_props_.get_day.toLocaleString('en-us', { day: 'numeric' });
    // const get_weekday = App_props_.get_weekday.toLocaleString('en-us', { weekday: 'short' });
    // const get_year = App_props_.get_year.toLocaleString('en-us', { year: 'numeric' });

    const get_month_name = App_props_.link_date.toLocaleString('en-US', { month: 'short'});
    const get_day = App_props_.link_date.toLocaleString('en-us', { day: 'numeric' });
    const get_weekday = App_props_.link_date.toLocaleString('en-us', { weekday: 'short' });
    const get_year = App_props_.link_date.toLocaleString('en-us', { year: 'numeric' });

    // const get_month_name = App_props_.link_date;
    // const get_day = App_props_.link_date;
    // const get_weekday = App_props_.link_date;
    // const get_year = App_props_.link_date;

    return(
        <div className='link_entry_date'>
            <div className='month_and_day_'>
            <div>{get_month_name} {get_day}<br/>{get_weekday}<br/>{get_year}</div>
            </div>
        </div>
    ); //[return]

}//[fn]

export default EntryDate;