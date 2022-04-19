// import logo from './rest-of-files/logo.svg';
// import './rest-of-files/App.css';
import './components_/css_files_/App_.css';

import ExpenceItem from './components_/Expence_Item';

function App() {
  // A list of user's data:
  const links_list = [
    {
      set_date: new Date(), set_link_name: 'Link name',
      set_href: 'http://andshop-web.infinityfreeapp.com', set_price: 'Y'
    },
  ];
// Temporarily to keep: new Date().toISOString().split('T')[0]
  return (
    <div className="App">
      <h1>Links Collector</h1> 
        <div id='container'>
        <ExpenceItem  ls_date={links_list[0].set_date}
                        ls_linkname={links_list[0].set_link_name}
                        ls_href={links_list[0].set_href}
                        ls_price={links_list[0].set_price}
          /> 
          <ExpenceItem  ls_date={links_list[0].set_date}
                        ls_linkname={links_list[0].set_link_name}
                        ls_href={links_list[0].set_href}
                        ls_price={links_list[0].set_price}
          /> 
        </div>
    </div>
  );//[return]
}

export default App;
