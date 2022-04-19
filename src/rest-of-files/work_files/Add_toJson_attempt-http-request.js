var http_request = new XMLHttpRequest(), json_content, method='GET', json_url = './user_links.json';
http_request.open(method, json_url, true);
    http_request.onreadystatechange = function() {
        if (http_request.readyState === 4 && http_request.status === 200) {
            json_content = JSON.parse(http_request.responseText);
            json_content.push(new_link_);

            http_request.open('POST', json_url, true);
            http_request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            http_request.send('xx= '+JSON.stringify(json_content));
        }//[if]
    }//[fn onreadystatechange]
    http_request.send(null);
