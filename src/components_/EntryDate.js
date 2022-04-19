import './css_files_/Expence_Item.css';
import './css_files_/EntryDate.css';

function EntryDate(App_props_){
    // Variables setting
    //  Example: let date_display = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    const get_month_name = App_props_.ls_date.toLocaleString('en-US', { month: 'short'});
    const get_day = App_props_.ls_date.toLocaleString('en-us', { day: 'numeric' })
    const get_weekday = App_props_.ls_date.toLocaleString('en-us', { weekday: 'short' })
    const get_year = App_props_.ls_date.toLocaleString('en-us', { year: 'numeric' })

    return(
        <div className='expence_date_'>
            <div className='month_and_day_'>
                <div>{get_month_name}</div>
                <div>{get_day}</div>
            </div>
            <div>{get_weekday}</div>
            <div>{get_year}</div>
        </div>
    ); //[return]

}//[fn]

export default EntryDate;