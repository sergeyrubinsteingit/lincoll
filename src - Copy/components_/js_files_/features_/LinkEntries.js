import React, {useState, useEffect} from 'react';
import LinkItem from './LinkItem';
import './../../css_files_/App_.css';
import LinksFilter from './filter_/LinksFilter';
import  './../../../App';

let public_array = [];
function LinkEntries(props) {
/////////////////////A Data from Json file ///////////////////// 
    let [link_properties, setData] = useState([{}]);
    let oper_array = props.items_;
    React.useEffect(() => {
        fetch('./user_links.json',
            {   headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
            }/*headers*/)
            .then((res) => res.json()).then((data) => {
                setData(data)
            })
    }, [])//[useEffect]

    console.log('--------------------- public_array ---------------------');
    console.log(public_array);
////////////////////////////////////////////////////////////
console.log('~~~~~~~ link_properties ~~~~~~~');
console.log(link_properties);

    console.log('~~~~~~~ oper_array ~~~~~~~');
    oper_array.length = 0;
    link_properties.map(arr_elem_ => oper_array.push(arr_elem_));
    console.log(oper_array);

// Selected year from [LinksFilter] module:
const [selected_year, SelectYear] = useState('All years');//[hook]
const SetFilterByYear = (sel_year) => {
    try{  
        SelectYear(sel_year);
            if (sel_year === 'All years') {
                console.log('!!!!!!!!!! oper_array !!!!!!!!!!');

                oper_array.length = 0;
                oper_array = link_properties.map(arr_elem_ => oper_array.push(arr_elem_));
                return oper_array;
            } else {
                for(let i = 0; i<oper_array.length; i++){
                    if(!oper_array[i].link_date.includes(sel_year)) {
                        console.log('>>>>>>>>>>> to splice <<<<<<<<<<<<');
                        if (oper_array.indexOf(oper_array[i]) === 0) {
                            oper_array.splice(0,1);
                        } else {
                            oper_array.splice(oper_array.indexOf(oper_array[i],1));
                        }//[if else]
                    };//[if]  
                }//[for]
            }//[if else 1]
    
        console.log('******** solution 1 ********');
        console.log('******** oper_array ********');
        console.log(' (((((((((((((link_properties))))))))))))) ');
        console.log(link_properties);
        console.log(oper_array);
        console.log('!!!!!!!!!! checking_MAP !!!!!!!!!!');
        oper_array.map(pr_ => console.log(pr_));
    }catch(e){
        console.log(e);
    }//[try]
};//[fn]

  return (
    <div>
    <LinksFilter selected_yr={selected_year} on_GetSelectedYear={SetFilterByYear} />
          <div className='link_entries' /*Contains all link elements*/>
                {
                    oper_array.map(new_entry => <LinkItem  /*Mapping LinkItem properties*/
                    key={ new_entry.key }
                    link_date={new_entry.link_date}
                    link_name={new_entry.link_name}
                    link_url={new_entry.link_url}
                    link_status={new_entry.link_status} />)
                }
        </div>
    </div>
    ); // [return]  
// ReturnLinksList();
} // [fn]

export default LinkEntries;
  ////////////////////////////////////////////////////////
    // const do_filter = oper_array.filter(filtered_);
    // function filtered_ ( marker_ ) {
    //   if(marker_.link_date.includes(sel_year)){
    //     console.log('******** solution 2 ********');
    //     console.log(marker_);
    //   };//[if]
    // };//[fn] 


//        let http_request = new XMLHttpRequest(), json_content = '', json_url = './user_links.json';
//        http_request.open('GET', json_url, true);
//        //http_request.onreadystatechange = (() => {
//            //if (http_request.readyState === 4 && http_request.status === 200) {
//                json_content = JSON.parse(http_request.responseText)
//                public_array = [
//                    ...json_content
//                ];
//                setData(json_content);

//            //}//[if]

//        //});//[fn]