import './components_/css_files_/App_.css';
import ExpenceItem from './components_/Expence_Item';
import LinkEntries from './components_/LinkEntries';
// Here is supposed to be call to JSON storing a list of user's puschases:
const purchaser_data = [
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

function App() {
//   Deploys user data into components:
  const components_array = [];
    for (let i = 0; i < purchaser_data.length; i++) {
      components_array.push(
        <ExpenceItem  ls_date={new Date()}
        ls_linkname={purchaser_data[i].item_name}
        ls_href={purchaser_data[i].link_to_item}
        ls_price={purchaser_data[i].item_price}
        /> 
      ); //[push]
    }//[for]

  return (
    <>
    <div className="App">
      <h1>Links Collector</h1>
        <div className='link_entries'>
            {components_array /*Renders all the components*/}
        </div> 
    </div>
    </>
  );//[return]

} //[fn]

export default App;