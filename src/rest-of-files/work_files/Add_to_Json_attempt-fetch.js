const Add_toJson = new_link_ => {

    fetch('user_links.json',
        {method: 'POST',
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                },  //[headers]
            body: JSON.stringify(new_link_),
        }  //[method]
    )  //[fetch]
    .then(response_ => {return response_.json()})
    .then(new_link_ => {console.log('Success writing the: ', new_link_)})
    .catch( err_ => {console.log('Failed: ', err_);})//[fetch-catch]
        
    // console.log('((((((((((Add_toJson))))))))))');
    // console.log(new_link_);
};//[fn]