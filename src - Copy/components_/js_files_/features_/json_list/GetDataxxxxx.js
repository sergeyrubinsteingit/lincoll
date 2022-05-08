import React, {useState, useEffect} from 'react';
let public_array = [];

const GetData=()=>{

    console.log('** GetData ***');
 
    const UseData=()=>{
        
// Brings in data from Json where user info is stored:
let [link_properties, setData]=useState([]);

    
  fetch('user_links.json',
  {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }
  )
  .then((get_response) => {
    console.log(get_response)
    return get_response.json();
  })
  .then((render_json) => {
    console.log('render_json:');
    console.log(render_json);
    public_array = [
      ...render_json
    ];
    setData(render_json);
    return public_array;
  });
  
console.log('** public_array ***');
console.log(public_array);
useEffect(()=>{ UseData() },[]);

}//[fn]

}//[fn]


export default GetData;