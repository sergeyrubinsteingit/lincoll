// import purchaser_data from '../App.js';
import ExpenceItem from './Expence_Item';
import './css_files_/App_.css';

// Here is supposed to be call to JSON storing a list of user's puschases:
const purchaser_data2 = [
    { 
      item_name: 'Boxing Gloves',
      link_to_item: 'https://www.aliexpress.com/item/4000434553950.html?spm=a2g0o.search0304.0.0.2381655dzU51yF&algo_pvid=773f881f-2eed-4e68-8d9f-f6278d5623e4&algo_exp_id=773f881f-2eed-4e68-8d9f-f6278d5623e4-9',
      item_price: 10.93,
    },
    { 
      item_name: 'Boxing Helmet',
      link_to_item: 'https://www.aliexpress.com/item/32984890302.html?spm=a2g0o.search0304.0.0.2381655dzU51yF&algo_pvid=773f881f-2eed-4e68-8d9f-f6278d5623e4&algo_exp_id=773f881f-2eed-4e68-8d9f-f6278d5623e4-50',
      item_price: 34.49,
    },
    { 
      item_name: 'Boxing Ball',
      link_to_item: 'https://www.aliexpress.com/item/1005003215366858.html?spm=a2g0o.search0304.0.0.2381655dzU51yF&algo_pvid=773f881f-2eed-4e68-8d9f-f6278d5623e4&algo_exp_id=773f881f-2eed-4e68-8d9f-f6278d5623e4-55',
      item_price: 18.49,
    },
    { 
      item_name: 'Boxing Gloves',
      link_to_item: 'https://www.aliexpress.com/item/4000434553950.html?spm=a2g0o.search0304.0.0.2381655dzU51yF&algo_pvid=773f881f-2eed-4e68-8d9f-f6278d5623e4&algo_exp_id=773f881f-2eed-4e68-8d9f-f6278d5623e4-9',
      item_price: 10.93,
    },
    { 
      item_name: 'Boxing Helmet',
      link_to_item: 'https://www.aliexpress.com/item/32984890302.html?spm=a2g0o.search0304.0.0.2381655dzU51yF&algo_pvid=773f881f-2eed-4e68-8d9f-f6278d5623e4&algo_exp_id=773f881f-2eed-4e68-8d9f-f6278d5623e4-50',
      item_price: 34.49,
    },
    { 
      item_name: 'Boxing Ball',
      link_to_item: 'https://www.aliexpress.com/item/1005003215366858.html?spm=a2g0o.search0304.0.0.2381655dzU51yF&algo_pvid=773f881f-2eed-4e68-8d9f-f6278d5623e4&algo_exp_id=773f881f-2eed-4e68-8d9f-f6278d5623e4-55',
      item_price: 18.49,
    },
    { 
      item_name: 'Boxing Gloves',
      link_to_item: 'https://www.aliexpress.com/item/4000434553950.html?spm=a2g0o.search0304.0.0.2381655dzU51yF&algo_pvid=773f881f-2eed-4e68-8d9f-f6278d5623e4&algo_exp_id=773f881f-2eed-4e68-8d9f-f6278d5623e4-9',
      item_price: 10.93,
    },
  
  ];
  

function LinkEntries() {
// Deploys user data into components:
  const components_array2 = [];
  for (let i = 0; i < purchaser_data2.length; i++) {
    components_array2.push(
      <ExpenceItem  ls_date={new Date()}
      ls_linkname={purchaser_data2[i].item_name}
      ls_href={purchaser_data2[i].link_to_item}
      ls_price={purchaser_data2[i].item_price}
      /> 
    ); //[push]
  }//[for]
    return (
        <div className='link_entries'>
            {components_array2 /*Renders all the components*/}
        </div>
    ); // [return]
} // [fn]
export default LinkEntries;